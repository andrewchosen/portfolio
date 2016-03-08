#PORTFOLIO

###Deployment Plan

1. Create development version of application/feature
2. Push development version/feature code to GitHub master branch
⋅⋅* push origin master
3. Team code review and submits any pull requests
⋅⋅⋅git pull origin master
4. Review and accept necessary pull requests and resolve conflicts
5. Merge new feature to remote staging server
⋅⋅⋅git merge feature
6. Test code
7. Push any changes to Github for review
⋅⋅⋅git push origin master
8. Review any pull requests and make necessary changes
9. Double and triple test the code
10. Make final changes/fixes
11. Push to production server
⋅⋅⋅git push production master
