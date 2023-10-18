let num1 = null;
let num2 = null;
let operator = null;


function add(a, b) {
    a = Number(num1);
    b = Number(num2);
    operator = '+';
    return a + b;
}

function subtract(a, b) {
    a = Number(num1);
    b = Number(num2);
    operator = '-';
    return num1 - num2;
}

function multiply(a, b) {
    a = Number(num1);
    b = Number(num2);
    operator = '*';
    return num1 * num2;
}

function divide(a, b) {
    if (Number(num2) == 0) {
        return 'Error';
    }

    a = Number(num1);
    b = Number(num2);
    operator = '/';
    return num1 / num2;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

//DOM
const numberButtons = document.querySelectorAll('button[id^="number-"]');
const operatorButtons = document.querySelectorAll('button[id^="operator-"]');
const output = document.querySelector('#output');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
let currentOutput = "";
let result = null;


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOutput += button.textContent;
        output.innerHTML = currentOutput;
    });
});

clearButton.addEventListener('click', () => {
    output.innerHTML = "0";
    result = null;
    currentOutput = "";
    num1 = null;
    num2 = null;
    operator = null;
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (result === null) {
            num1 = output.textContent;
            result = output.textContent;
            operator = button.textContent; 
            currentOutput = "";
        } else {
            num2 = output.textContent;
            result = operate(operator, num1, num2);
            output.innerHTML = result;
            num1 = result;
            operator = button.textContent;
            currentOutput = "";
        }
    });
});

equalsButton.addEventListener('click', () => {
    num2 = output.textContent;
    num1 = operate(operator, num1, num2);
    output.innerHTML = num1;
    result = null;
    currentOutput = "";
    num1 = null;
    num2 = null;
    operator = null;
});

