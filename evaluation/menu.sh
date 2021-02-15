#!/bin/bash
option = 0
while [[ "$option" != "6" ]]
do
    echo "Enter your option"
    echo "1. Add user and print new user list"
    echo "2. Double money of all users and print updated user list"
    echo "3. Show only millionares"
    echo "4. Sort by richest"
    echo "5. Calculate total wealth of all users and print it"
    echo "6. Exit"
    read option
    echo "You entered $option"
    if [ "$option" == "1" ]
    then node -e 'require("./WealthManagementSystem.js").fetchUsers()'
    
    elif [ "$option" == "2" ]
    then node -e 'require("./WealthManagementSystem.js").doubleWealth()'
    
    elif [ "$option" == "3" ]
    then node -e 'require("./WealthManagementSystem.js").getMillionaires()'
    
    elif [ "$option" == "4" ]
    then node -e 'require("./WealthManagementSystem.js").sortByRichest()'
    
    elif [ "$option" == "5" ]
    then node -e 'require("./WealthManagementSystem.js").getTotalWealth()'
    else
    echo "Please enter valid option"
    echo "  "
    fi
done