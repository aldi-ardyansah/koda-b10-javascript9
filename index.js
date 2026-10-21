// Handling fetch then-catch
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        // Mengubah email menjadi lowercase dengan built-in method
        function withBuiltIn() {
            let withBuiltIn = [];

            for (let i = 0; i < users.length; i++) {
                const email = users[i].email;
                withBuiltIn[i] = email.toLowerCase();
            }

            console.log("Handling fetch then-catch dengan built-in method:");
            console.log(withBuiltIn);

        }

        withBuiltIn();

        console.log("");

        // Mengubah email menjadi lowercase tanpa built-in method
        function withoutBuiltIn() {
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

            console.log("Handling fetch then-catch tanpa built-in method:");
            console.log(withoutBuiltIn);
        }

        withoutBuiltIn();

        console.log("");
    })
    .catch(function (error) {
        console.error("Gagal fetch data:", error);
    });

// Handling fetch async-await
async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        // Mengubah email menjadi lowercase dengan built-in method
        function withBuiltIn(users) {
            let withBuiltIn = [];

            for (let i = 0; i < users.length; i++) {
                const email = users[i].email;
                withBuiltIn[i] = email.toLowerCase();
            }

            console.log("Handling fetch async-await dengan built-in method:");
            console.log(withBuiltIn);
        }

        withBuiltIn(users);

        console.log("");

        // Mengubah email menjadi lowercase tanpa built-in method
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
                            break;
                        }
                    }

                    result += resultChar;
                }

                withoutBuiltIn[i] = result;
            }

            console.log("Handling fetch async-await tanpa built-in method:");
            console.log(withoutBuiltIn);
        }

        withoutBuiltIn(users);
    } catch (error) {
        console.error("Gagal fetch data:", error);
    }
}

fetchUsers();