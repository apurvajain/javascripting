#!/bin/bash
echo "Welcome to User Wealth Management System "

while :
do
    cat<<EOF
    node -e 'require("./fetch").get3user()'
    ========>MENU<============

    Option (1) Add user and print new user list
    Option (2) Double money of all users and print updated user list
    Option (3) Show only millionares
    Option (4) Sort by richest
    Option (5) Calculate total wealth of all users and print it
    Option (6) Exit
           
    ===========================
EOF
    read -n1 -s
    case "$REPLY" in
    "1")  node -e 'require("./Fetch").newData()' ;;
    "2")  node -e 'require("./Fetch").doubleWealth()';;
    "3")  echo "you chose choice 3" ;;
    "4")  echo "you chose choice 3" ;;
    "5")  echo "you chose choice 3" ;;
    "6")  exit                      ;;
     * )  echo "invalid option"     ;;
    esac
    sleep 1
done