const fs = require('fs')

fs.writeFile("./a.txt", "namaste, chalo kaam ki batt meei aate hai", (err) => {
    if (err) {
        console.error(err)
    }
    else {
        function write(err, res) {
            console.log(res)

        }


        setTimeout(() => {
            fs.readFile("./a.txt", "utf-8", write)
        }, 2000)
        // setTimeout(() => {
        //     fs.readFile("./a.txt", "utf-8", write)
        // }, 1000);
    }
})
fs.writeFile('./b.txt', "hello, lets get to work", (err) => {
    if (err) {
        console.error(err)
    }
    else {
        function write2(err, res) {
            console.log(res)
        }
        setTimeout(() => {
            fs.readFile('./b.txt', 'utf-8', write2)

        }, 1000)
    }
})


