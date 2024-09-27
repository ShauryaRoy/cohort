const fs = require('fs')


function func(err, res) {
    console.log(res)
}
setTimeout(func, 1000)

console.log(fs.readFile("./a.txt", "utf-8", func))


console.log(fs.readFileSync("./a.txt", "utf-8", func))
console.log(fs.readFileSync("./a.txt", "utf-8", func))
