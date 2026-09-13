import praw
import time
import json
import os
import pandas as pd

subreddits = [
    "HypertensionAdvocacy",
    "hypertension",
    "PulmonaryHypertension",
    "bloodpressure",
    "highbloodpressure",
    "HighBloodPressureInfo"
]

reddit = praw.Reddit(
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
    user_agent="YOUR_USER_AGENT"
)

checkpoint_file = "checkpoint.json"
excel_file = r"C:\Users\Desktop\Blood Pressure Reddit\blood_pressure_reddit_transformed.xlsx"
URL_LIMIT = 2079

def load_checkpoint():
    if os.path.exists(checkpoint_file):
        with open(checkpoint_file, "r") as f:
            return json.load(f)
    return {}

def save_checkpoint(cp):
    with open(checkpoint_file, "w") as f:
        json.dump(cp, f)

checkpoint = load_checkpoint()
all_data = {}

for sub in subreddits:
    rows = []
    last_scraped = checkpoint.get(sub, 0)
    subreddit_obj = reddit.subreddit(sub)
    for submission in subreddit_obj.new(limit=None):
        if submission.created_utc <= last_scraped:
            continue
        # Build post text and check length
        post_text = f"{submission.title}\n{submission.selftext}"
        if len(post_text) > URL_LIMIT:
            print("One post was excluded because it reached Excel's URL limit.")
        else:
            rows.append({"type": "post", "text": post_text})
        submission.comments.replace_more(limit=0)
        for comment in submission.comments.list():
            comment_text = comment.body
            if len(comment_text) > URL_LIMIT:
                print("One comment was excluded because it reached Excel's URL limit.")
            else:
                rows.append({"type": "comment", "text": comment_text})
        checkpoint[sub] = submission.created_utc
        save_checkpoint(checkpoint)
        time.sleep(2)
    all_data[sub] = rows

with pd.ExcelWriter(excel_file) as writer:
    for sub, rows in all_data.items():
        df = pd.DataFrame(rows)
        df.to_excel(writer, sheet_name=sub[:31], index=False)
