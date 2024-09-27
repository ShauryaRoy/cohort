// function random(resolve) {
//     resolve()
// }

// function callback() {
//     console.log("Callback function called");
// }

// let p = new Promise(random); // Promise is suppose to return somethiing eventually

// p.then(callback)
// console.log(p);
const fs = require("fs")
const p = fs.readFile('a.txt', 'utf-8', (lol1, lol2) => {
    if (lol2) {
        console.log(lol2)
    }
})
console.log(p)
