function fib(n) {
    let first = 1;
    let second = 1;

    for (let i = 2; i < n; i++) {
        let result = first + second
        first = second;
        second = result;
    }
    return second;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757