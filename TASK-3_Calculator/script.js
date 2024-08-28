let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        alert('Invalid operation');
        currentInput = '';
    }
    updateDisplay();
}