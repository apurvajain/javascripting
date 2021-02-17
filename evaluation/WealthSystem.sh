node -e 'require("./Index").fetchAndDisplayAllUsers()'
while :
echo "\nSelect an option from the given menu:- \n
1. Add user and print new user list 
2. Double money of all users and print updated user list
3. Show only millionares
4. Sort by richest
5. Calculate total wealth of all users and print it
6. Exit" ;
do
    read INPUT_NUMBER
    case $INPUT_NUMBER in
        1) node -e 'require("./Index").addUser()';;
        2) node -e 'require("./Index").doubleMoney()';;
    esac
done 