start="<--------USER Details: START----------->"
end="<--------USER Details: END--------------->"
echo "Welcome to User Wealth Mangement System "
echo $start
node -e 'require("./FetchData").fetchNewUsers(3)'
echo $end
while :
do

    cat<<EOF

Please select an option

    Option (1) Add user and print new user list
    Option (2) Double money of all users and print updated user list
    Option (3) Show only millionares
    Option (4) Sort by richest
    Option (5) Calculate total wealth of all users and print it
    Option (6) Exit
           
EOF
    read -n1 -s
    case "$REPLY" in
    "1")  echo "You have selected option 1"
    echo $start
    
    node -e 'require("./FetchData").fetchNewUsers(1)' 
    echo $end ;;
    "2")  echo "You have selected option 2"
    echo $start
    node -e 'require("./Functions").doubleWealth()'
    echo $end ;;
    "3")  echo "You have selected option 3"
    echo $start
    node -e 'require("./Functions").showMillionares()' 
    echo $end ;;
    "4")  echo "You have selected option 4"
    echo $start
    node -e 'require("./Functions").sortByWealth()' 
    echo $end ;;
    "5")  echo "You have selected option 5"
    echo $start
    node -e 'require("./Functions").calculateWealth()'
    echo $end ;;
    "6")  echo "You have selected option 6"
    echo "Exit"
    node -e 'require("./Functions").clearStorage()'
    exit                      ;;
     * )  echo "invalid option"     ;;
    esac
    sleep 1
done