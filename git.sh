#!/bin/bash

# Stash new changes
git stash save "New changes"

# Pull updates from master branch
git pull origin master

# Apply stashed changes
git stash apply

# Add changes
git add .

# Prompt for commit message
read -p "Enter commit message: " message

# Commit changes
git commit -m "$message"

# Push to master branch
git push origin master