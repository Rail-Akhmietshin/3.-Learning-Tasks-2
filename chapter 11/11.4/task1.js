const p = new Promise(function(resolve, reject) {
    throw new Error("Whoops!")
}).catch(console.log);


// скрытый try/catch не обрабатывает отложенные ошибки, вызванные внутри асинхронной функции setTimeout




