# JavaScript 9

## Mengubah email menjadi lowercase dengan built-in method

### Kode
```javascript
function withBuiltIn(users) {
    let withBuiltIn = [];
    for (let i = 0; i < users.length; i++) {
        const email = users[i].email;
        withBuiltIn[i] = email.toLowerCase();
    }
    return withBuiltIn;
}
```

## Mengubah email menjadi lowercase tanpa built-in method

### Kode
```javascript
function withoutBuiltIn(users) {
    let withoutBuiltIn = [];
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < users.length; i++) {
        const email = users[i].email;
        let result = "";
        for (let j = 0; j < email.length; j++) {
            let resultChar = email[j];

            for (let k = 0; k < uppercase.length; k++) {
                if (email[j] === uppercase[k]) {
                    resultChar = lowercase[k];
                }
            }
            result += resultChar;
        }
        withoutBuiltIn[i] = result;
    }
    return withoutBuiltIn;
}
```

## Handling fetch then-catch

### Kode
```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        console.log("Handling fetch then-catch dengan built-in method:");
        console.log(withBuiltIn(users));
        console.log("");
        console.log("Handling fetch then-catch tanpa built-in method:");
        console.log(withoutBuiltIn(users));
        console.log("");
    })
    .catch(function (error) {
        console.error("Gagal fetch data:", error);
    });
```

## Handling fetch async-await

### Kode
```javascript
async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log("Handling fetch async-await dengan built-in method:");
        console.log(withBuiltIn(users));
        console.log("");
        console.log("Handling fetch async-await tanpa built-in method:");
        console.log(withoutBuiltIn(users));
    } catch (error) {
        console.error("Gagal fetch data:", error);
    }
}

fetchUsers();
```