echo "Welcome to Wealth Management System"

node ./fetch-user/FetchUser.js

node -e 'require("./fetch-user/FetchUser.js").fetchUser(3)'

# while [ "$option" != 6 ]
# do
    echo "1. Add user and print new user list"
    echo "2. Double money of all users and print updated user list"
    echo "3. Show only millionares"
    echo "4. Sort by richest"
    echo "5. Calculate total wealth of all users and print it"
    echo "6. Exit"

read choice

if [ "$choice" == 1]
then 
    node -e 'require("./fetch-user/FetchUser.js").fetchUser(3)'

#     fi
# done