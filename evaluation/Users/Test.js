const fetchUsers = (numberOfUsers) => {
  let count = 0;
  for (let i = 0; i < numberOfUsers; i += 1) {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((jsonResponse) => {
        const user = jsonResponse.results;
        setWealth(user);
        users.push(user);
        count++;
        if (count === numberOfUsers) {
          localStorage.setItem('users', JSON.stringify(users));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
