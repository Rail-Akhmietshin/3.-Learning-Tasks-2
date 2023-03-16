function sum(value) {
    sum.currentSum += value;
    return sum;
}

sum.currentSum = 0;

sum.toString = function() {
    let Sum = sum.currentSum;
    sum.currentSum = 0;
    return Sum;
}

console.log(sum(1)(2)(4) == 7);     // true
console.log(sum(2)(2)(2) == 7);     // false
console.log(sum(7)(9)(1) == 17);    // true