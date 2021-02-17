echo "Welcome to Wealth Management System"

node ./fetch-user/FetchUser.js
node -e 'require("./fetch-user/FetchUser.js").clearLocal()'
node -e 'require("./fetch-user/FetchUser.js").fetchUser(3)'

choice = 0

 while [ "$choice" != 6 ]
 do
    echo "1. Add user and print new user list"
    echo "2. Double money of all users and print updated user list"
    echo "3. Show only millionares"
    echo "4. Sort by richest"
    echo "5. Calculate total wealth of all users and print it"
    echo "6. Exit"

read choice

if [ "$choice" == 1 ]

then 
    node -e 'require("./fetch-user/FetchUser.js").fetchUser(1)'
    node -e 'require("./fetch-user/FetchUser.js").addAndDisplay()'

elif [ "$choice"  == 2 ]

then 
    
    node -e 'require("./fetch-user/FetchUser.js").doubleWealth()'

elif [ "$choice" == 3 ] 

then 
    node -e 'require("./fetch-user/FetchUser.js").showMillionaires()'
1

elif [ "$choice" == 4 ]

then 
    node -e 'require("./fetch-user/FetchUser.js").sortByRichest()'

elif [ "$choice" == 5 ]

then 
    node -e 'require("./fetch-user/FetchUser.js").totalWealth()'

fi
done