echo "Welcome to the wealth Management Portal"


node -e 'require("./javascript-files/initial-user-fetch/InitialUserFetch").fetchUsers(3)'
node ./javascript-files/initial-user-log/InitialUserLog.js