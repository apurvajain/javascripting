echo "1. Add user and print new user list \n
2. Double money of all users and print updated user list \n
3. Show only millionares \n
4. Sort by richest \n
5. Calculate total wealth of all users and print it \n
6. Exit \n 

PLEASE ENTER YOUR CHOICE"

read command

if [ $command == 1 ]
then
node FetchData.js
fi

if [ $command == 2 ]
then
node DoubleMoney.js
fi

if [ $command == 3 ]
then
node GetMill.js
fi

if [ $command == 4 ]
then
node GetRichest.js
fi

if [ $command == 5 ]
then
node GetTotal.js
fi



