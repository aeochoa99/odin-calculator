const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
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

function deleteLastInput() {
    displayResult.textContent = displayResult.textContent.slice(0, -1);
}

function updateDisplay(buttonContent) {
    displayResult.textContent += buttonContent;
}

clearButton.addEventListener("click", clearResult);
deleteButton.addEventListener("click", deleteLastInput);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.textContent);
    });
})