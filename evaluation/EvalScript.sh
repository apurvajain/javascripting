echo "Welcome to the user wealth management system portal: "
echo "<-----------------User details: start--------------------->"
node -e 'require("./CallAPI").fetchUsers(3)'
echo "<-----------------User details: end--------------------->"
option = 0
while [[ "$option" != "6" ]]
do
    echo "Enter your option"
    echo "1. Add users and print new user list"
    echo "2. Double the money of all users and print updated user list"
    echo "3. Show only millionares"
    echo "4. Sort by richest"
    echo "5. Calculate total wealth of all users and print it"
    echo "6. Exit"
    read option
    echo "You entered $option"
    if [ "$option" == "1" ]
    then node -e 'require("./CallAPI").fetchUsers(1)'
    fi
    if [ "$option" == "2" ]
    then node -e 'require("./CallAPI.js").doubleWealth()'
    fi
    if [ "$option" == "3" ]
    then node -e 'require("./CallAPI.js").millonaires'
    fi
    if [ "$option" == "4" ]
    then node -e 'require("./CallAPI.js").sortByRichest()'
    fi
     if [ "$option" == "4" ]
    then node -e 'require("./CallAPI.js").calculateTotalWealth()'
    fi


done