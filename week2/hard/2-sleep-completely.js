/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function sleep(milliseconds) {
    return new Promise((resolve) => {
        const Nowtime = Date.now()

        while (Date.now() - Nowtime < milliseconds) {

        }
        resolve()
    })
}
module.exports = sleep


const prom = new Promise((resolve, reject) => {
    sleep(3000).then(resolve)
})
prom.then(() => {
    console.log("done")
})