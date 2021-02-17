#!/bin/bash
echo 'Welcome to wealth management system'
node -e 'require("./API.js").fetchUserDataAndUpdateList(3)'
node -e 'require("./API.js").logUserList()'
choice=0
while [ $choice -lt "6" ]
do
    echo $'1.Add user\n2.Double money of all users\n3.Show only millionares\n4.Sort by richest\n5.Calculate total wealth of all users\n6.Exit'
    read -p "Enter your choice : " choice
    case $choice in
        "1")
        node -e 'require("./API.js").fetchUserDataAndUpdateList(1)'
        node -e 'require("./API.js").logUserList()'
        ;;
        "2")
        node -e 'require("./API.js").doubleWealth()'
        ;;
        "3")
        node -e 'require("./API.js").fetchMillionaires()'
        ;;
        "4")
        node -e 'require("./API.js").sortByWealth()'
        ;;
        *)
        break
        ;;
    esac
done
node -e 'require("./API.js").resetUserData()'