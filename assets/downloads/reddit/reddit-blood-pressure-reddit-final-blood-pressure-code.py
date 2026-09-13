import praw
import time
import json
import os
import re
import pandas as pd
from datetime import datetime

subreddits = ["Heartfailure"]

# Initialize Reddit API (Credentials need to be provided by the user)
reddit = praw.Reddit(
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
    user_agent="YOUR_USER_AGENT"
)

checkpoint_file = "checkpoint.json"
excel_file = "new.xlsx"  # Change this path as needed
URL_LIMIT = 2079
URL_PLACEHOLDER = "[url posted]"

def load_checkpoint():
    if os.path.exists(checkpoint_file):
        with open(checkpoint_file, "r") as f:
            return json.load(f)
    return {}

def save_checkpoint(cp):
    with open(checkpoint_file, "w") as f:
        json.dump(cp, f)

def replace_long_urls(text, threshold=30):
    # Find URLs and replace with placeholder if they exceed threshold length
    def repl(match):
        url = match.group(0)
        return URL_PLACEHOLDER if len(url) > threshold else url
    return re.sub(r'https?://\S+', repl, text)

checkpoint = load_checkpoint()
all_data = {}

for sub in subreddits:
    rows = []
    last_scraped = checkpoint.get(sub, 0)
    subreddit_obj = reddit.subreddit(sub)
    print(f"Processing subreddit: {sub}")
    count = 0
    for submission in subreddit_obj.new(limit=None):
        if submission.created_utc <= last_scraped:
            continue
        post_text = f"{submission.title}\n{submission.selftext}"
        post_text = replace_long_urls(post_text)
        post_date = datetime.utcfromtimestamp(submission.created_utc).strftime("%Y-%m-%d %H:%M:%S")
        rows.append({"type": "post", "text": post_text, "date": post_date})
        submission.comments.replace_more(limit=0)
        for comment in submission.comments.list():
            comment_text = replace_long_urls(comment.body)
            comment_date = datetime.utcfromtimestamp(comment.created_utc).strftime("%Y-%m-%d %H:%M:%S")
            rows.append({"type": "comment", "text": comment_text, "date": comment_date})
        checkpoint[sub] = submission.created_utc
        save_checkpoint(checkpoint)
        count += 1
        print(f"Processed submission {count} in subreddit {sub}")
        time.sleep(2)
    all_data[sub] = rows
    print(f"Done processing subreddit: {sub}")

with pd.ExcelWriter(excel_file) as writer:
    for sub, rows in all_data.items():
        df = pd.DataFrame(rows)
        df.to_excel(writer, sheet_name=sub[:31], index=False)

print("Finished processing all subreddits and saved data to Excel.")
