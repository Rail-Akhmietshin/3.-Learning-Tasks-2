function f() {
    console.log("Hello!");
}
  

Function.prototype.defer = function(ms) {
    return setTimeout( this, ms);
}

f.defer(1000);