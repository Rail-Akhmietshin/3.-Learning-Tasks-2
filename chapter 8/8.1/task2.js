let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};



// Ответ на 2 вопрос (как быстрее получить значение glasses – через pockets.glasses или через head.glasses?):

// По логике вещей, через head.glasses, так как мы сразу обращаемся к объекту, где и хранится это свойство. 
// А через pockets.glasses мы бы искали сначала в объекте bed, далее в table и только потом в head.
