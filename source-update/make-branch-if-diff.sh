#!/bin/sh

git diff --quiet test-manf.json
if [ $? -eq 1 ]
then
  DATESTAMP=`date +"%Y%m%d"`
  BRANCH_NAME="update-rat-$DATESTAMP-test"
  git config user.email "meinte.boersma@gmail.com"
  git config user.name "Meinte Boersma"
  git checkout -b $BRANCH_NAME HEAD~1
#  FIXME  replace HEAD~1 with "" when running on main
  git add test-manf.json
  git commit -m "updated test manufacturers from JRC source"
  git push -u origin $BRANCH_NAME
  echo "committed update to separate branch $BRANCH_NAME"
else
  echo "no change"
fi

