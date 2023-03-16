let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
promise.then(console.log);      // выведет 1, так как cостояние промиса может быть изменено только один раз.
