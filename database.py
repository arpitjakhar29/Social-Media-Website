import os
import random
from datetime import datetime, timedelta

def generate_random_dates(years: int, min_commits_per_month: int = 20):
    start_date = datetime.now() - timedelta(days=years * 365)
    end_date = datetime.now()
    
    commits = []
    
    for year in range(start_date.year, end_date.year + 1):
        for month in range(1, 13):
            # Ensure at least `min_commits_per_month` commits per month
            days_in_month = [day for day in range(1, 29)]  # Limiting to 28 days to avoid Feb issues
            commit_days = random.sample(days_in_month, min_commits_per_month)

            for day in commit_days:
                commit_date = datetime(year, month, day)

                if commit_date <= end_date:
                    # Decide random number of commits for this day (between 1 to 10)
                    num_commits = random.randint(1, 10)
                    for _ in range(num_commits):
                        commits.append(commit_date.strftime('%Y-%m-%dT%H:%M:%S'))

    random.shuffle(commits)  # Shuffle commits for randomness
    return commits

def make_commits(dates):
    for commit_datetime in dates:
        with open('data.txt', 'a') as file:
            file.write(f'Commit on {commit_datetime}\n')

        os.system('git add data.txt')
        os.system(f'GIT_COMMITTER_DATE="{commit_datetime}" git commit --date="{commit_datetime}" -m "Commit on {commit_datetime}"')

    os.system('git push')

years = 3  # Change this to the number of years you want to generate commits for
commit_dates = generate_random_dates(years)
make_commits(commit_dates)
