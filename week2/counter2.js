var timer = 0;
function call() {

    function func() {
        console.log(timer++);
    }

    setTimeout(func, 1000)
}

setInterval(call, 1000)