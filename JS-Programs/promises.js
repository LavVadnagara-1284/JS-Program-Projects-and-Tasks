const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise consumed because resolve was called in async task');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function () {
    console.log('Async task 2 resolved');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Lav", email: "Lav@example.com" });
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Lav", password: "123" });
        } else {
            reject("Error: something went wrong");
        }
    }, 1000);
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => { console.log('Finally The promise is either resolved or rejected '); })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        } else {
            reject("Error: JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error: ',error);
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/LavVadnagara-1284")
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))