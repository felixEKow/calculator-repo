let numberOne = 3;
let numberTwo = 7;

// document.getElementById('numberOne').textContent = numberOne;
// document.getElementById('numberTwo').textContent = numberTwo;
let numbersSum = document.getElementById('numbersSumDisplay');

function plus (){
    let result = numberOne + numberTwo;
    numbersSum.textContent = result;
};

function minus (){
    let result = numberOne - numberTwo;
    numbersSum.textContent = result;
};

function multiply (){
    let result = numberOne * numberTwo;
    numbersSum.textContent = result;
};

function divide (){
    let result = numberOne / numberTwo;
    numbersSum.textContent = Math.floor(result);
};