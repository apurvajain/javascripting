# Create a User wealth management system using command line
# Script should initially fetch 3 random users using https://randomuser.me/api API and assign random wealth to the fetched users
# It should then ask CLI user to select an option from the given menu
# 1. Add user and print new user list
# 2. Double money of all users and print updated user list
# 3. Show only millionares
# 4. Sort by richest
# 5. Calculate total wealth of all users and print it
# 6. Exit
# and print results as per chosen operation

# node-localstorage
# node -e 'require("./filename").functionName()'

echo "User Wealth Management System"
# node WealthManagementSystem.js
node -e 'require("./WealthManagementSystem").clearData()'
node -e 'require("./WealthManagementSystem").fetchUsers("https://randomuser.me/api")'
node -e 'require("./WealthManagementSystem").showAllUsers()'
number=1
startDetails="<--------USER DETAILS START----------->"
endDetails="<--------USER  END ------------------->"

while [ $number != 6 ]
do
echo "1. add user name and print new user list"
echo "2. Double money of all users and print updated user list"
echo "3. Show only millionares"
echo "4. Sort by richest"
echo "5. Calculate total wealth of all users and print it"
echo "6. Exit"

read number
   if [ $number == 1 ]
   then
      node -e 'require("./WealthManagementSystem").fetchUsers("https://randomuser.me/api")'
      echo $startDetails
      node -e 'require("./WealthManagementSystem").showAllUsers()'
      echo $endDetails
   elif [ $number == 2 ]
   then
      node -e 'require("./WealthManagementSystem").doubleMoney()'
      echo $startDetails
      node -e 'require("./WealthManagementSystem").showAllUsers()'
      echo $endDetails
   elif [ $number == 3 ]
   then
      echo $startDetails
      node -e 'require("./WealthManagementSystem").showMillionares()'
      echo $endDetails
   else
   
      echo EXIT
   fi
done