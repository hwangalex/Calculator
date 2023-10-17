let num1 = 0;
let num2 = 0;
let operator = '';


function add(a, b) {
    num1 = a;
    num2 = b;
    operator = '+';
    return num1 + num2;
}

function subtract(a, b) {
    num1 = a;
    num2 = b;
    operator = '-';
    return num1 - num2;
}

function multiply(a, b) {
    num1 = a;
    num2 = b;
    operator = '*';
    return num1 * num2;
}

function divide(a, b) {
    if (num2 == 0) {
        return 'Error';
    }

    num1 = a;
    num2 = b;
    operator = '/';
    return num1 / num2;
}

function opreate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}

//DOM
const numberButtons = document.querySelectorAll('button[id^="number-"]');
const output = document.querySelector('#output');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
let currentOutput = "";

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOutput += button.textContent;
        output.innerHTML = currentOutput;
    });
});

clearButton.addEventListener('click', () => {
    output.innerHTML = "0";
    currentOutput = "";
});


