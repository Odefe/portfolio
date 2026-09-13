import requests
import pandas as pd

client_id = "YOUR_REDDIT_CREDENTIAL"
client_secret = "YOUR_REDDIT_CREDENTIAL"
user_agent = "gg"

auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
data = {"grant_type": "client_credentials"}
headers = {"User-Agent": user_agent}
token = requests.post("https://www.reddit.com/api/v1/access_token", auth=auth, data=data, headers=headers).json()["access_token"]
headers["Authorization"] = f"bearer {token}"

subreddits = ["AskReddit", "todayilearned", "technology", "worldnews"]
limit = 100
writer = pd.ExcelWriter(r"C:\Users\User\Desktop\reddit_posts.xlsx", engine="openpyxl")

for sub in subreddits:
    url = f"https://oauth.reddit.com/r/{sub}/new?limit={limit}"
    items = requests.get(url, headers=headers).json()["data"]["children"]
    records = [item["data"] for item in items]
    pd.json_normalize(records).to_excel(writer, sheet_name=sub, index=False)

writer.close()
