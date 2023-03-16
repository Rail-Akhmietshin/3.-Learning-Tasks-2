let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};


function reversePrintList(list) {
    
    
    if (list) {
        return reversePrintList(list.next);
    } else {
        console.log(list.value);
        return reversePrintList
    }

    
}

console.log(reversePrintList(list));