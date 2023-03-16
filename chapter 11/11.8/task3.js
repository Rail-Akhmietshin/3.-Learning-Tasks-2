async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return 10;
}

// 1 способ

function f() {
    setTimeout( () => wait(), 0);
}

// 2 способ

function f2() {
    wait().then( res => console.log(res) );
}

f();
f2();
