const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");

let displayResult = document.querySelector("#result");

equalsButton.disabled = true;

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
    equalsButton.disabled = true;
    decimalButton.disabled = false;
}

function subtract(constantOne, constantTwo) {
    equation.result = parseFloat(constantOne) - parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();
    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
    equalsButton.disabled = true;
    decimalButton.disabled = false;
}

function multiply(constantOne, constantTwo) {
    equation.result = parseFloat(constantOne) * parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();
    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
    equalsButton.disabled = true;
    decimalButton.disabled = false;
}

function divide(constantOne, constantTwo) {
    if (parseFloat(constantTwo) === 0) {
        displayResult.textContent = "Nice try.";
        resetEquation();
        return;
    }

    equation.result = parseFloat(constantOne) / parseFloat(constantTwo);
    displayResult.textContent = Math.round(equation.result * 100) / 100;
    resetEquation();

    if (equation.result != null) {
        equation.constantOne = String(equation.result);
    }
    equalsButton.disabled = true;
    decimalButton.disabled = false;
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
    if (equation.constantOne === null) {
        return;
    }

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
    equalsButton.disabled = true;
    decimalButton.disabled = false;
    
    if (equation.constantOne === null) {
        displayResult.textContent = "";
    }

    if (equation.operator === null) {
        equation.constantOne = "";
        displayResult.textContent += buttonContent;
        equation.constantOne = displayResult.textContent;
        if (equation.constantOne.includes(".")) {
            decimalButton.disabled = true;
        }
    } else {
        equalsButton.disabled = false;
        displayResult.textContent += buttonContent;
        if (equation.constantTwo === null) {
            equation.constantTwo = "";
        }
        equation.constantTwo += buttonContent;
        if (equation.constantTwo.includes(".")) {
            decimalButton.disabled = true;
        }
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
    decimalButton.disabled = false;
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

decimalButton.addEventListener("click", () => {
    updateDisplay(decimalButton.textContent);
})