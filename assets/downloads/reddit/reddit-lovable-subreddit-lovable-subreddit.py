import praw
import pandas as pd
import os
import time

reddit = praw.Reddit(
    client_id="YOUR_REDDIT_CREDENTIAL",
    client_secret="YOUR_REDDIT_CREDENTIAL",
    user_agent="gg"
)

# File path
excel_path = r"C:\Users\ceofl\Desktop\lovable_posts.xlsx"
checkpoint_path = r"C:\Users\ceofl\Desktop\lovable_checkpoint.txt"

# Load checkpoint if exists
saved_ids = set()
if os.path.exists(checkpoint_path):
    with open(checkpoint_path, "r") as f:
        saved_ids = set(line.strip() for line in f)

posts_data = []
count = 0
limit = 1000
batch_size = 100  # PRAW fetches in batches
wait_time = 2     # Adjust to stay within limits

try:
    for submission in reddit.subreddit("lovable").top(limit=limit):
        if submission.id in saved_ids:
            continue

        posts_data.append({
            "id": submission.id,
            "title": submission.title,
            "selftext": submission.selftext,
            "author": str(submission.author),
            "created_utc": submission.created_utc,
            "score": submission.score,
            "num_comments": submission.num_comments,
            "url": submission.url,
            "permalink": submission.permalink
        })

        saved_ids.add(submission.id)
        count += 1

        # Save progress every batch
        if count % batch_size == 0:
            df = pd.DataFrame(posts_data)
            df.to_excel(excel_path, index=False)
            with open(checkpoint_path, "w") as f:
                f.writelines(post["id"] + "\n" for post in posts_data)
            print(f"Saved {count} posts...")
            time.sleep(wait_time)

        if count >= limit:
            break

except Exception as e:
    print(f"An error occurred: {e}")
    df = pd.DataFrame(posts_data)
    df.to_excel(excel_path, index=False)
    with open(checkpoint_path, "w") as f:
        f.writelines(post["id"] + "\n" for post in posts_data)

# Final save
df = pd.DataFrame(posts_data)
df.to_excel(excel_path, index=False)
with open(checkpoint_path, "w") as f:
    f.writelines(post["id"] + "\n" for post in posts_data)

print(f"Done. Total saved: {count} posts.")
