echo "Welcome to the User Wealth Management system"

node -e 'require("./operations/Operations.js").fetchUsers(3)'
node -e 'require("./operations/Operations.js").returnPrintData()'



echo 'Please select option\n1. Add user and print new user list
2. Double money of all users and print updated user list
3. Show only millionares
4. Sort by richest
5. Calculate total wealth of all users and print it
6. Exit'
read option
  case "$option" in
   "1") node -e 'require("./operations/Operations.js").fetchUsers(1)'
        node -e 'require("./operations/Operations.js").returnPrintData()'
   ;;
   "2") node -e 'require("./operations/Operations.js").returnPrintData(1)'
   ;;
   "3") node -e 'require("./operations/Operations.js").returnPrintData(2,"Millionare User")'
   ;;
   "4") node -e 'require("./operations/Operations.js").returnPrintData(3)'
   ;;
   "5") node -e 'require("./operations/Operations.js").returnPrintData(4,"Total Wealth")'
   ;;
   "6") node -e 'require("./users/Users.js").clearLocalStorage()'
   ;;
esac


