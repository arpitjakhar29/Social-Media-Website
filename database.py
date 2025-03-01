import os
import random
from datetime import datetime, timedelta

def random_date():
    """Generate a random date within the past year."""
    days_ago = random.randint(1, 365)  # Pick a random day in the past year
    date = datetime.now() - timedelta(days=days_ago)
    return date.strftime('%Y-%m-%d %H:%M:%S')

def make_commit(commit_count):
    """Generate random commits with random timestamps."""
    for _ in range(commit_count):
        commit_date = random_date()

        with open("data.txt", "a") as file:
            file.write(f'Commit on {commit_date}\n')

        os.system("git add data.txt")

        # Windows-compatible way to set commit date
        commit_command = f'git commit --date="{commit_date}" -m "Random Commit"'
        os.system(commit_command)

    # Push to GitHub
    os.system("git push")

# Set total commits (random between 20 to 30 per month)
total_commits = random.randint(240, 300)  # 12 months × (20 to 30 commits per month)

make_commit(total_commits)
