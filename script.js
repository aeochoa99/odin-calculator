const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");

let displayResult = document.querySelector("#result");

const equation = {
    constantOne: null,
    operator: null,
    constantTwo: null
}

function add(constantOne, constantTwo) {
    return constantOne + constantTwo;
}

function subtract(constantOne, constantTwo) {
    return constantOne - constantTwo;
}

function multiply(constantOne, constantTwo) {
    return constantOne * constantTwo;
}

function divide(constantOne, constantTwo) {
    return constantOne / constantTwo;
}

function operate(constantOne, operator, constantTwo) {
    if (operator === "+") {
        add(constantOne, constantTwo);
    } else if (operator === "-") {
        subtract(constantOne, constantTwo);
    } else if (operator === "*") {
        multiply(constantOne, constantTwo);
    } else {
        divide(constantOne, constantTwo);
    }
}

function clearResult() {
    displayResult.textContent = "";
}

function deleteLastInput() {
    displayResult.textContent = displayResult.textContent.slice(0, -1);
}

function updateDisplay(buttonContent) {
    if (equation.operator === null) {
        displayResult.textContent += buttonContent;
        equation.constantOne = displayResult.textContent;
    } else {
        displayResult.textContent += buttonContent;
        if (equation.constantTwo === null) {
            equation.constantTwo = "";
        }
        equation.constantTwo += buttonContent;
    }
}

function updateOperator(operator) {
    displayResult.textContent += operator;
    equation.operator = operator;
}

clearButton.addEventListener("click", clearResult);
deleteButton.addEventListener("click", deleteLastInput);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.textContent);
    });
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateOperator(button.textContent);
    })
})