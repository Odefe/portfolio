import praw
import csv
import time
from datetime import datetime

def main():
    reddit = praw.Reddit(
    client_id="YOUR_REDDIT_CREDENTIAL",
    client_secret="YOUR_REDDIT_CREDENTIAL",
    user_agent="gg")


    subs = [
        'entrepreneur',
        'smallbusiness',
        'startups',
        'PTSD',
        'CPTSD',
        'therapy',
        'mentalhealth'
    ]

    search_phrases = [
        "entrepreneurship helped me recover",
        "starting my business saved me",
        "entrepreneurship as therapy",
        "being an entrepreneur helped my mental health",
        "entrepreneurship helped me heal",
        "starting a business after burnout",
        "I healed through my startup",
        "healing through entrepreneurship",
        "entrepreneurship was my therapy",
        "building my company helped me heal",
        "my business helped me recover",
        "startup saved my life",
        "launching my business saved me",
        "founder journey as healing",
        "business gave me purpose",
        "small business helped me cope",
        "business kept me afloat",
        "work helped me overcome trauma",
        "building helped me manage PTSD",
        "recovering after business failure",
        "bouncing back from failure",
        "failed startup recovery",
        "startup failure taught me",
        "life after closing business",
        "recover from business burnout",
        "burnout recovery through work",
        "being a founder helped me cope",
        "business as therapy",
        "coping with trauma by building a startup",
        "trauma healing through business"
    ]

    records = []

    for sub in subs:
        subreddit = reddit.subreddit(sub)
        for phrase in search_phrases:
            query = f'"{phrase}"'
            for post in subreddit.search(query, sort='new', time_filter='all', limit=None):
                title = post.title
                content = post.selftext
                date = datetime.utcfromtimestamp(post.created_utc).strftime('%Y-%m-%d')
                records.append({
                    'title':     title,
                    'content':   content,
                    'author':    str(post.author),
                    'subreddit': sub,
                    'date':      date,
                    'url':       post.url,
                    'phrase':    phrase
                })
                time.sleep(1)  # pause to prevent rate‐limit

    out_path = r"C:\Users\ceofl\Desktop\healing_business_posts.csv"
    with open(out_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'title', 'content', 'author', 'subreddit', 'date', 'url', 'phrase'
        ])
        writer.writeheader()
        writer.writerows(records)

    print(f"saved {len(records)} posts to {out_path}")

if __name__ == '__main__':
    main()
