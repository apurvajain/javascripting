echo "Welcome to the wealth Management Portal"


node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(3)'
node ./javascript-files/initial-user-log/InitialUserLog.js


echo "\nPlease select option to continue \n1.Add new user and print new list"
read option


if [[ $option -eq 1 ]]
then # if/then branch
  node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(1)'
  node ./javascript-files/initial-user-log/InitialUserLog.js
fi
