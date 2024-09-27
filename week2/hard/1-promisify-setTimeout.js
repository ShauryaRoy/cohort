const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("shaurya")
    }, 2000)
})

prom.then((message) => { console.log(message) })