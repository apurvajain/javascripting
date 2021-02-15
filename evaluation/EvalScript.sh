echo "Welcome to the user wealth management system portal: "
echo "<-----------------User details: start--------------------->"
node -e 'require("./CallAPI").fetchRandomUsers()'
echo "<-----------------User details: end--------------------->"
echo "select an option from the given menu
1. Add user and print new user list
2. Double money of all users and print updated user list
3. Show only millionares
4. Sort by richest
5. Calculate total wealth of all users and print it
6. Exit"