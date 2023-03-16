function f(x) {
    console.log(x);
}

function delay(func, time) {
    return function(...args) {
        setTimeout( () => func.apply(this, args), time);
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test2"); // показывает "test" после 3000 мс