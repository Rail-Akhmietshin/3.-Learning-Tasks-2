function sumTo1(n) {
    let sum = n;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

function sumTo2(n) {
    return (n == 0) ? n : n + sumTo2(n - 1);
}

function sumTo3(n) {
    return (1 + n) / 2 * n;
}

console.log(sumTo1(100));    // 5050
console.log(sumTo2(100));    // 5050
console.log(sumTo3(100));    // 5050