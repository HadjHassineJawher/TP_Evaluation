const multiplySquare = (num, factor = 5) => {
    let squareNum = num * num; 
    let result = squareNum * factor;
    return result; 
};

console.log(multiplySquare(4)); 
console.log(multiplySquare(3, 2)); 