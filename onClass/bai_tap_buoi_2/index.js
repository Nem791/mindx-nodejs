function getUserInfoFromGithub(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            resolve(xhr.responseText);
        };
        xhr.onerror = () => {
            reject(xhr.statusText)
        }

        xhr.send();
    })
}

getUserInfoFromGithub("https://api.github.com/users/defunkt")
    .then(xhr => {
        console.log(xhr);
    })
    .catch(err => {
        console.log(err);
    })


// let myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)
//     let a = 2;
//     let b = 3;
//     myResolve(a); // when successful
//     myReject(b);  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) { console.log(value) },
//     function (error) { console.log(error) }
// ).catch()

async function getUserInfoWithAsyncAwait() {
    let responseUser;
    try {
        const responseUser = await getUserInfoFromGithub("https://api.github.com/users/defunkt");
        const responseUser2 = await getUserInfoFromGithub("https://api.github.com/users/nhatban25912345");
        console.log('Async await-data: ', responseUser);
        console.log('Async await-data: ', responseUser2);
        return responseUser;
    } catch (error) {
        console.log(error);
    }
}