#!/bin/bash
echo 'Welcome to wealth management system'
node -e 'require("./API.js").fetchUserDataAndUpdateList(3)'
node -e 'require("./API.js").logUserList()'