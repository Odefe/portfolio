import praw
import pandas as pd
from datetime import datetime

# Replace the following strings with your own Reddit API credentials
CLIENT_ID = 'YOUR_REDDIT_CREDENTIAL'
CLIENT_SECRET = 'YOUR_REDDIT_CREDENTIAL'
USER_AGENT = 'hh'  # e.g., 'myredditapp by /u/yourusername'

# Initialize the Reddit instance
reddit = praw.Reddit(
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET,
    user_agent=USER_AGENT
)

# Subreddits to scrape
subreddits = ['collections', 'NFT']

# Number of posts to retrieve from each subreddit
NUM_POSTS = 15

# List to hold all data
all_posts_data = []

for subreddit_name in subreddits:
    print(f"Scraping subreddit: r/{subreddit_name}")
    subreddit = reddit.subreddit(subreddit_name)
    
    # Fetch the top NUM_POSTS hot posts
    posts = subreddit.hot(limit=NUM_POSTS)
    
    for post in posts:
        post_data = {
            'Subreddit': subreddit_name,
            'Post ID': post.id,
            'Title': post.title,
            'Author': str(post.author),
            'Date': datetime.fromtimestamp(post.created_utc),
            'Upvotes': post.score,
            'URL': post.url,
            'Content': post.selftext,
            'Number of Comments': post.num_comments
        }
        
        # Fetch comments
        post.comments.replace_more(limit=0)
        comments = post.comments.list()
        
        comments_data = []
        for comment in comments:
            comment_data = {
                'Comment ID': comment.id,
                'Parent ID': comment.parent_id,
                'Comment Author': str(comment.author),
                'Comment Date': datetime.fromtimestamp(comment.created_utc),
                'Comment Upvotes': comment.score,
                'Comment Body': comment.body
            }
            comments_data.append(comment_data)
        
        post_data['Comments'] = comments_data
        all_posts_data.append(post_data)

# Convert the data into a DataFrame
posts_df = pd.DataFrame(all_posts_data)

# Expand the comments into a separate DataFrame
comments_list = []
for post in all_posts_data:
    for comment in post['Comments']:
        comment['Post ID'] = post['Post ID']
        comment['Subreddit'] = post['Subreddit']
        comments_list.append(comment)

comments_df = pd.DataFrame(comments_list)

# Remove the 'Comments' column from posts_df as it's now in comments_df
posts_df = posts_df.drop('Comments', axis=1)

# Correct the file path string
excel_file_path = r'C:\Users\ceofl\Desktop\redditsample.xlsx'  # Use a raw string

# Write the DataFrames to an Excel file with multiple sheets
with pd.ExcelWriter(excel_file_path) as writer:
    posts_df.to_excel(writer, sheet_name='Posts', index=False)
    comments_df.to_excel(writer, sheet_name='Comments', index=False)

print(f"Data has been successfully saved to '{excel_file_path}'.")
