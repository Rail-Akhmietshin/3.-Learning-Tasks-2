function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
    console.log("somebody")
};

let rabbit = new Rabbit("Rabbit");


rabbit.sayHi();                         // Rabbit
Rabbit.prototype.sayHi();               // undefined (т.к. контекст - Rabbit, который не содержит this.name)
Object.getPrototypeOf(rabbit).sayHi();  // undefined (т.к. контекст - Rabbit, который не содержит this.name)
rabbit.__proto__.sayHi();               // undefined (т.к. контекст - Rabbit, который не содержит this.name)