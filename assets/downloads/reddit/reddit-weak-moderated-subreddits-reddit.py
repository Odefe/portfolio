import praw
import pandas as pd
import time
from datetime import datetime
from openpyxl import Workbook

# Set up Reddit API credentials
reddit = praw.Reddit(
    client_id="YOUR_REDDIT_CREDENTIAL",
    client_secret="YOUR_REDDIT_CREDENTIAL",
    user_agent="gg"
)

# File path for the new Excel file
file_path = r"C:\Users\ceofl\Desktop\reddit_analysis_test.xlsx"

# Define categories and topics
categories = {
    "Entertainment/Sports": ["Sports", "Movies", "Music", "TV", "Gaming"],
    "Hobbies/Occupations": ["Arts", "Writing", "Automotive", "Outdoors", "Photography"],
    "Exercise/Health": ["Mental", "Physical", "Diet", "Exercise", "Health"],
    "Technology": ["Coding", "Tech Support", "PC Building", "Tools"],
    "Animals": ["Cats", "Dogs", "Birds", "Pets", "Wildlife"],
    "Fashion/Beauty": ["Fashion", "Beauty", "Hair", "Tattoos", "Shoes"]
}

# Function to get date of the most recent post in a subreddit
def get_most_recent_post(subreddit_name):
    try:
        subreddit = reddit.subreddit(subreddit_name)
        recent_post = next(subreddit.new(limit=1))
        recent_date = datetime.fromtimestamp(recent_post.created_utc).strftime('%Y-%m-%d')
        return recent_date
    except Exception as e:
        print(f"Could not fetch most recent post for {subreddit_name}: {e}")
        return None

# Step 1: Fetch subreddits for each category and create initial "Subreddits less than 7000 subs" sheet
def create_subreddit_data():
    data = []
    for category, topics in categories.items():
        for topic in topics:
            search_results = reddit.subreddits.search(topic, limit=5)  # Limit to 5 for testing
            for subreddit in search_results:
                if subreddit.subscribers < 7000:
                    data.append({
                        "Category": category,
                        "Topic": topic,
                        "Subreddit Name": subreddit.display_name,
                        "Description": subreddit.public_description,
                        "Subscriber Count": subreddit.subscribers,
                        "Creation Date": datetime.fromtimestamp(subreddit.created_utc).strftime('%Y-%m-%d'),
                        "Link": f"https://www.reddit.com/r/{subreddit.display_name}"
                    })
    return pd.DataFrame(data).head(5)  # Ensure only 5 rows

# Step 2: Create "AvailableSubsSubreddit" data (dummy data used for simplicity)
def create_available_subs_data():
    data = [
        {"Subreddit Name": "SampleSub1", "Subscriber Count": 1000, "Moderators": "None", "Category": "Uncategorized", "Date Made Available": "2024-11-01"},
        {"Subreddit Name": "SampleSub2", "Subscriber Count": 500, "Moderators": "None", "Category": "Uncategorized", "Date Made Available": "2024-11-02"},
        {"Subreddit Name": "SampleSub3", "Subscriber Count": 1500, "Moderators": "None", "Category": "Uncategorized", "Date Made Available": "2024-11-03"},
        {"Subreddit Name": "SampleSub4", "Subscriber Count": 2500, "Moderators": "None", "Category": "Uncategorized", "Date Made Available": "2024-11-04"},
        {"Subreddit Name": "SampleSub5", "Subscriber Count": 700, "Moderators": "None", "Category": "Uncategorized", "Date Made Available": "2024-11-05"}
    ]
    return pd.DataFrame(data)

# Step 3: Create "RedditRequestsSubreddit" data (dummy data used for simplicity)
def create_reddit_requests_data():
    data = [
        {"Subreddit Name": "ExampleSub3", "Request Date": "2024-11-03", "Requester Username": "User1", "Status": "Inactive", "Post Details": "Request due to inactivity", "Upvotes": 10},
        {"Subreddit Name": "ExampleSub4", "Request Date": "2024-11-04", "Requester Username": "User2", "Status": "Inactive", "Post Details": "Request due to inactivity", "Upvotes": 20},
        {"Subreddit Name": "ExampleSub5", "Request Date": "2024-11-05", "Requester Username": "User3", "Status": "Inactive", "Post Details": "Request due to inactivity", "Upvotes": 15},
        {"Subreddit Name": "ExampleSub6", "Request Date": "2024-11-06", "Requester Username": "User4", "Status": "Inactive", "Post Details": "Request due to inactivity", "Upvotes": 25},
        {"Subreddit Name": "ExampleSub7", "Request Date": "2024-11-07", "Requester Username": "User5", "Status": "Inactive", "Post Details": "Request due to inactivity", "Upvotes": 30}
    ]
    return pd.DataFrame(data)

# Step 4: Cross-reference for "High Likeliness of Weak Moderation"
def create_high_likeliness_data(subreddits_df, available_subs_df):
    merged_df = subreddits_df[subreddits_df["Subreddit Name"].isin(available_subs_df["Subreddit Name"])]
    merged_df["In r/AvailableSubs"] = "Yes"
    merged_df["High Likeliness of Weak Moderation"] = "High Likeliness of Weak Moderation"
    return merged_df.head(5)  # Ensure only 5 rows

# Step 5: Add "Date of Most Recent Post" to each sheet
def add_most_recent_post(df, subreddit_column):
    df["Date of Most Recent Post"] = df[subreddit_column].apply(lambda x: get_most_recent_post(x))
    return df

# Create the workbook and sheets
with pd.ExcelWriter(file_path, engine="openpyxl") as writer:
    # Step 1: Create "Subreddits less than 7000 subs" sheet with initial data
    subreddits_df = create_subreddit_data()
    subreddits_df = add_most_recent_post(subreddits_df, "Subreddit Name")  # Limit to 5 rows
    subreddits_df.to_excel(writer, sheet_name="Subreddits less than 7000 subs", index=False)

    # Step 2: Create "AvailableSubsSubreddit" sheet with dummy data
    available_subs_df = create_available_subs_data().head(5)
    available_subs_df = add_most_recent_post(available_subs_df, "Subreddit Name")
    available_subs_df.to_excel(writer, sheet_name="AvailableSubsSubreddit", index=False)

    # Step 3: Create "RedditRequestsSubreddit" sheet with dummy data
    reddit_requests_df = create_reddit_requests_data().head(5)
    reddit_requests_df = add_most_recent_post(reddit_requests_df, "Subreddit Name")
    reddit_requests_df.to_excel(writer, sheet_name="RedditRequestsSubreddit", index=False)

    # Step 4: Create "less than 7000 subs and in AS" with cross-referenced data
    high_likeliness_df = create_high_likeliness_data(subreddits_df, available_subs_df)
    high_likeliness_df = add_most_recent_post(high_likeliness_df, "Subreddit Name")
    high_likeliness_df.to_excel(writer, sheet_name="less than 7000 subs and in AS", index=False)

print(f"Test file created at {file_path} with first 5 rows of each sheet populated.")

