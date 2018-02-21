# Bears-Team-9
Voyage-4


* `git clone` repo
* Jump into the `development` branch. `git checkout development`
* Get latest code from develoment. `git pull`
* Make your own feature branch `git checkout -b <your branch name>` from `development`
* Fetch latest code again before pushing your branch.
  1. Commit or stash your changes
  2. `git checkout development`
  3. `git pull`
  4. `git checkout <your branch name>`
  5. `git merge development`
  6. Fix any conflicts
  7. Push your new branch
* Make a pull request from your new branch against the `development` branch