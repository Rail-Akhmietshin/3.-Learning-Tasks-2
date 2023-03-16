"use strict"


// Версия с работающим конструктором


function myName(value) {
    this.name = value;
}

let obj = new myName("Rail");
let obj2 = new obj.constructor("John");

console.log(obj2.name);
console.log(obj2.constructor === obj.constructor);


// Версия с неработающим конструктором

function myLastName(value) {
    this.lastname = value;
}

myLastName.prototype = {
    firstname: "someone"
};

let obj3 = new myLastName("Ivanov");
let obj4 = new obj3.constructor("Turin");

console.log(obj4.lastname)
console.log(obj3.constructor === obj4.constructor);

