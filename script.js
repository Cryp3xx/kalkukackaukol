let currentInput = 1;

function updateInput(number) {
    const inputField = currentInput === 1 ? "firstNumber" : "secondNumber";
    document.getElementById(inputField).value += number;
}

function switchInputField(field) {
    currentInput = field;
}

function addition() {
    performOperation("+");
}

function substraction() {
    performOperation("-");
}

function division() {
    performOperation("/");
}

function multiplication() {
    performOperation("*");
}

function performOperation(operator) {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value);
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value);
    
    let result;
    
    switch (operator) {
        case "+":
            result = inputFirstNumber + inputSecondNumber;
            break;
        case "-":
            result = inputFirstNumber - inputSecondNumber;
            break;
        case "/":
            result = inputFirstNumber / inputSecondNumber;
            break;
        case "*":
            result = inputFirstNumber * inputSecondNumber;
            break;
        default:
            result = "Error";
            break;
    }
    
    document.getElementById("result").textContent = result;
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    currentInput = 1;
}