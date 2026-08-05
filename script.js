const clearButton = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".num");

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

function updateDisplay(buttonContent) {
    displayResult.textContent += buttonContent;
}

clearButton.addEventListener("click", clearResult);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.textContent);
    });
})