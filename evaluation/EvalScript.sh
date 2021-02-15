echo "Welcome to the wealth Management Portal"


node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(3)'
node -e 'require("./javascript-files/initial-user-log/InitialUserLog").logUsers()'

echo "\nPlease select option to continue \n1.Add new user and print new list \n2.Double money of all users and print update list"
read option


if [[ $option -eq 1 ]]
then # if/then branch
  node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(1)'
  node -e 'require("./javascript-files/initial-user-log/InitialUserLog").logUsers()'
  
elif [[ $option -eq 2 ]]
then
  node ./javascript-files/double-money/DoubleMoney.js
  node ./javascript-files/initial-user-log/InitialUserLog.js
fi
