$ git config --global user.name "{USERNAME}"
$ git config --global user.email "{USEREMAIL}"
----------------------------------------------
$ git init
----------------------------------------------
$ git status
$ git diff {FILENAME}
$ git diff --cached {FILENAME}
$ git diff HEAD -- {FILENAME} 
$ git add .	
$ git add {FILENAME}
$ git commit -m "{INFO}"
----------------------------------------------
$ git log
$ git reflog
$ git reset --hard HEAD^
$ git reset --hard {COMMIT ID}
$ git reset HEAD {FILENAME}
$ git checkout -- {FILENAME}
$ git rm {FILENAME}
----------------------------------------------
$ ssh-keygen -t rsa -C "{USEREMAIL}"
$ git remote add origin {GIT ADDRESS}
$ git push -u origin master