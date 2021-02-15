echo "Welcome to the wealth Management Portal"


node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch")'.fetchUsers()
node ./javascript-files/initial-user-log/InitialUserLog.js