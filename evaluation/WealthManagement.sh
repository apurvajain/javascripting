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

echo 'Welcome to the User wealth management system'

node -e 'require("./WealthManagement").clearLocalStorage()'
node -e 'require("./WealthManagement").fetchUsers(3)'
echo $"<--------User details: START----------->"
node -e 'require("./WealthManagement").displayAllUsers()'
echo $"<--------User details: END ------------->"
option=0
while [ "$option" != 6 ]
do
    echo "1. Add user and print new user list"
    echo "2. Double money of all users and print updated user list"
    echo "3. Show only millionares"
    echo "4. Sort by richest"
    echo "5. Calculate total wealth of all users and print it"
    echo "6. Exit"

read option
   if [ "$option" == 1 ]
   then
      echo $"You have selected option" 1
      node -e 'require("./WealthManagement").fetchUsers(1)'
      echo $"<--------User details: START----------->"
      node -e 'require("./WealthManagement").displayAllUsers()'
      echo $"<--------User details: END ------------->"
   
   elif [ "$option" == 2 ]
   then
      echo $"You have selected option" 2
      node -e 'require("./WealthManagement").doubleMoney()'
      echo $"<--------User details: START----------->"
      node -e 'require("./WealthManagement").displayAllUsers()'
      echo $"<--------User details: END ------------->"   

   else
      echo EXIT
   fi
done
