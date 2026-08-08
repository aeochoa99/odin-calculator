const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalsButton = document.querySelector("#equals");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");

let displayResult = document.querySelector("#result");

const equation = {
    constantOne: null,
    operator: null,
    constantTwo: null,
    result: null
}

function add(constantOne, constantTwo) {
    equation.result = parseFloat(constantOne) + parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();
    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
}

function subtract(constantOne, constantTwo) {
    equation.result = parseFloat(constantOne) - parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();
    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
}

function multiply(constantOne, constantTwo) {
    equation.result = parseFloat(constantOne) * parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();
    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
}

function divide(constantOne, constantTwo) {
    equation.result = parseFloat(constantOne) / parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();
    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
}

function operate(constantOne, operator, constantTwo) {
    if (operator === "\u002B") {
        add(constantOne, constantTwo);
    } else if (operator === "\u2212") {
        subtract(constantOne, constantTwo);
    } else if (operator === "\u00D7") {
        multiply(constantOne, constantTwo);
    } else {
        divide(constantOne, constantTwo);
    }
}

function clearResult() {
    displayResult.textContent = "";
    resetEquation();
}

function deleteLastInput() {
    displayResult.textContent = displayResult.textContent.slice(0, -1);

    if (equation.operator === null) {
        equation.constantOne = equation.constantOne.slice(0, -1);
        if (equation.constantOne.length === 0) {
            equation.constantOne = null;
        }
    } else if (equation.constantTwo === null) {
        equation.operator = null;
    } else {
        equation.constantTwo = equation.constantTwo.slice(0, -1);
        if (equation.constantTwo.length === 0) {
            equation.constantTwo = null;
        }
    }
}

function updateDisplay(buttonContent) {
    if (equation.constantOne === null) {
        displayResult.textContent = "";
    }

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
    if (equation.constantTwo != null) {
        operate(equation.constantOne, equation.operator, equation.constantTwo);
    }

    if (equation.operator === null) {
        displayResult.textContent += operator;
        equation.operator = operator;
    } else {
        displayResult.textContent = displayResult.textContent.slice(0, -1);
        displayResult.textContent += operator;
        equation.operator = operator;
    }
}

function resetEquation() {
    equation.constantOne = null;
    equation.operator = null;
    equation.constantTwo = null;
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

equalsButton.addEventListener("click", () => {
    operate(equation.constantOne, equation.operator, equation.constantTwo);
})