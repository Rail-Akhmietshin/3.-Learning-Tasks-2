function printNumbers(from, to) {
    let timeID = setTimeout( function print(from) {
        if (from < to) {
            console.log(from++);
            timeID = setTimeout(print, 1000, from);
        } else {
            clearTimeout(timeID);
        }
    }, 1000, from)    
}


function printNumbers(from, to) {
    let current = from;
    let timeID = setInterval( function print() {
        if (current < to) {
            console.log(current++);
        } else {
            clearInterval(timeID);
        }
    }, 1000)
}

printNumbers(1, 5);