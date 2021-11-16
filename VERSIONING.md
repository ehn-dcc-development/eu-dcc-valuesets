# Versioning

This file documents the versioning process.

Versioning of this Git repository is organised as a simplified [Git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) (or [see here](https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf)).
The `main` branch is the _only_ primary branch, and therefore also serves as the _default branch_ for GitHub.
The version history is organised around **releases**.
Each release is identified through a [semver version number](https://semver.org/).


## Releasing

Releases are prepared in branches named `release/<release version>`.
After preparation has finished, a _Pull Request_ (PR) from the release branch into `main` is created.
This PR serves as the trigger a code review for that release, possibly leading to further work being done in that release branch.

After enough reviewers have approved the PR, it can be merged into `main`.
Merging the PR is done through “rebase + merge commit”, _without_ fast-forwarding.
That keeps the history very clean, and tidy - linear, with the incremental work done for each release clearly identifiable.
After merging the PR for a release into `main`, the merge commit is tagged as `<release version>`.

It's advisable to rebase a release branch manually, as there's no guarantee that a conflict-free automatic rebase is syntactically, or semantically correct.
After a manual rebase, the rebased branch has to be force-pushed.

The release branch can be deleted after merging the PR, for the following reasons:

- A branch is essentially a label on a HEAD commit, and a tag fulfills the labelling function just as well.
- Having many branches can be confusing.


### Fixing a release

In case a particular release (that's not the latest release) needs to be fixed, a separate “fix release branch” is created.
Such a fix branch starts at the commit tagged for that particular release, and is named `fix/<fix release version>`.
Typically, a fix release version increments the patch part of the semver version number.
A fix branch is _never_ merged back into the `main` branch.
A fix release branch is (considered to be) released by tagging the appropriate commit as `<fix release version>`.

