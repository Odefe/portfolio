import pandas as pd

# Load your dataset
file_path = r"C:\Users\ceofl\Desktop\divorce_reddit_posts.xlsx"
df = pd.read_excel(file_path, sheet_name='Combined')

# Make sure numeric columns are numeric and fill missing values with 0
df['upvotes'] = pd.to_numeric(df['upvotes'], errors='coerce').fillna(0)
df['comments'] = pd.to_numeric(df['comments'], errors='coerce').fillna(0)

# Group by subreddit and source (post/comment)
stats = df.groupby(['subreddit', 'source']).agg({
    'post_id': 'nunique',
    'upvotes': 'sum',
    'comments': 'sum'
}).reset_index()

# Pivot so posts and comments line up side by side
stats_pivot = stats.pivot(index='subreddit', columns='source')
stats_pivot = stats_pivot.fillna(0)  # fill any missing with 0

# Rename columns for clarity
stats_pivot.columns = [f"{col[0]}_{col[1]}" for col in stats_pivot.columns]
stats_pivot = stats_pivot.reset_index()

# Sort by subreddit
stats_pivot = stats_pivot.sort_values('subreddit')

# Calculate overall totals
total_posts = df[df['source'] == 'post']['post_id'].nunique()
total_comments = df[df['source'] == 'comment'].shape[0]
total_upvotes = df['upvotes'].sum()
# Only posts have "comments" values
total_post_comments = df[df['source'] == 'post']['comments'].sum()

print("Statistics by Subreddit (Posts vs. Comments):")
print(stats_pivot.to_string(index=False))

print("\nOverall Totals:")
print(f"Total Unique Posts: {total_posts}")
print(f"Total Comment Rows: {total_comments}")
print(f"Sum of Upvotes (Posts + Comments): {total_upvotes}")
print(f"Sum of 'Comments' (only on Posts): {total_post_comments}")

# Optionally save to Excel
output_stats = r"C:\Users\ceofl\Desktop\divorce_reddit_stats.xlsx"
with pd.ExcelWriter(output_stats) as writer:
    stats_pivot.to_excel(writer, sheet_name='Stats', index=False)

print(f"\nStatistics saved to {output_stats}")
