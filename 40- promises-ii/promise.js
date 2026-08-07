const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'faizan', age: 20 })
        } else {
            reject(`ERROR: something went wrong`)
        }
    }, 1000)
})

promiseFour.then(function(user) {
        console.log(user)
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log("The promise is either resolved or rejected"))


// promise five

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ language: 'JavaScript', age: 22 })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
});

async function consumingPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumingPromiseFive()

// fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))