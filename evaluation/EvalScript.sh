echo "Welcome to the wealth Management Portal"


node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(3)'
node ./javascript-files/initial-user-log/InitialUserLog.js

echo "\nPlease select option to continue \n1.Add new user and print new list \n2.Double money of all users and print update list \n3. Show only millionares"
read option


if [[ $option -eq 1 ]]
then # if/then branch
  node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(1)'
  node ./javascript-files/initial-user-log/InitialUserLog.js
  
elif [[ $option -eq 2 ]]
then
  node ./javascript-files/double-money/DoubleMoney.js
  node ./javascript-files/initial-user-log/InitialUserLog.js
elif [[ $option -eq 3 ]]
then
  node ./javascript-files/log-millionares/LogMillionares.js
fi


