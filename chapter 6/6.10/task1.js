"use strict"

function f() {
    console.log( this ); // undefined, так как не привязан ни к какому контексту
}

f()

let user = {
    g: f.bind(null)
};

user.g();   // Так как функция bind фиксирует контекст, но не вызывает, то вызов f.bind(null) приводит null

