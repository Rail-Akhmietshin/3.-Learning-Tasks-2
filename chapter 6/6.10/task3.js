function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // выведет undefined, так как свойство объекта существует лишь в конкретном контексте, который после вызова функции bind изменился.