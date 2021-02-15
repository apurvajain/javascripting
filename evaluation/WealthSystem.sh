for i in {1..3};
    do node -e 'require("./Index").fetchUsers()';
done;

echo "\nSelect an option from the given menu:- \n
1. Add user and print new user list 
2. Double money of all users and print updated user list
3. Show only millionares
4. Sort by richest
5. Calculate total wealth of all users and print it
6. Exit" ;
while :
do
    read INPUT_NUMBER
    case $INPUT_NUMBER in
        1) node -e 'require("./Index").displayAllUsers()'
        node -e 'require("./Index").displayAllUsers()';;
        6) node -e 'require("./Index").clearLocalStorage()';;
    esac
done    

    #   do node -e 'require("./Index").displayAllUsers()';;
        # 2) do node -e 'require("./Index").clearLocalStorage()';;
        # 6)  do node -e 'require("./Index").clearLocalStorage()';;



