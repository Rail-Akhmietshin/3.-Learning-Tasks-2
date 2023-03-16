"use strict"

function Rabbit() {}

Rabbit.prototype = {
    eats: true
};


let rabbit = new Rabbit();

// Rabbit.prototype = {};       Значение устанавливается перед созданием объекта, а не после. Ничего не изменится

// Rabbit.prototype.eats = false;       Значение изменяется на false, так как объект Rabbit.prototype неизменяемый, т.е. происходит переприсваивание

// delete rabbit.eats;          Ничего не изменится, так как свойство eats содержится в Rabbit.prototype, rabbit его просто наследует

// delete Rabbit.prototype.eats;        undefined, так как свойство удаляется из Rabbit.prototype (базового местонахождения св-ва)




