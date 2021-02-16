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
start="<--------USER Details: START----------->"
end="<--------USER Details: END ------------------->"
echo "Welcome to the User wealth management system"
echo $start
node -e 'require("./WealthManagementSystem").clearUserDetails()'
node -e 'require("./WealthManagementSystem").fetchUser("https://randomuser.me/api")'
node -e 'require("./WealthManagementSystem").fetchUser("https://randomuser.me/api")'
node -e 'require("./WealthManagementSystem").fetchUser("https://randomuser.me/api")'
node -e 'require("./WealthManagementSystem").displayUsers()'
echo $end

option=1

optionStatement="you have selected option"

while [ $option != 6 ]
do
echo "1. Add user and print new user list"
echo "2. Double money of all users and print updated user list"
echo "3. Show only millionares"
echo "4. Sort by richest"
echo "5. Calculate total wealth of all users and print it"
echo "6. Exit"

read option
   if [ $option == 1 ]
   then
      echo $optionStatement 1
      node -e 'require("./WealthManagementSystem").fetchUser("https://randomuser.me/api")'
      echo $start
      node -e 'require("./WealthManagementSystem").displayUsers()'
      echo $end
      
   elif [ $option == 2 ]
   then
      echo $optionStatement 2
      node -e 'require("./WealthManagementSystem").doubleMoney()'
      echo $start
      node -e 'require("./WealthManagementSystem").displayUsers()'
      echo $end

   elif [ $option == 3 ]
   then
      echo $optionStatement 3
      node -e 'require("./WealthManagementSystem").showMillionaires()'
    #   echo $start
    #   node -e 'require("./WealthManagementSystem").displayUsers()'
    #   echo $end

   elif [ $option == 4 ]
   then
      echo $optionStatement 4
      echo $start
      node -e 'require("./WealthManagementSystem").sortByRichest()'
      echo $end

   elif [ $option == 5 ]
   then
      echo $optionStatement 5
      echo $start
      node -e 'require("./WealthManagementSystem").totalWealth()'
      echo $end
    else
      echo EXIT
   fi
done





