let animal = {
    eat() {
    this.full = true;
}
};

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // rabbit, так как объект this ссылается на текущий контекст (rabbit)