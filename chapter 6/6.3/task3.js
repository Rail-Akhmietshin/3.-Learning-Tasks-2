let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();    // Hello, John 


// Функции ищут переменные сначала в локальном окружении (в к-м они находятся), а далее вверх по вложенности до глобального (включительно)