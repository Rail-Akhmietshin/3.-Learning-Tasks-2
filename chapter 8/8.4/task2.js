function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(time) {
    let current_func = this;
    return function(...args) {
        return setTimeout(current_func, time, ...args)
    }
}


f.defer(1000)(1, 2); // выведет 3 через 1 секунду.