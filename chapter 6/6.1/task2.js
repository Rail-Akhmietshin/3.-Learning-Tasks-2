function factorial(n) {
    return (n in [0, 1]) ? n : n * factorial(n - 1);
}

console.log(factorial(5));      // 120