function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clearBtn");
const buttons = document.querySelectorAll("button");

let a = "";
let b = "";
let operator = "";

function appendValue(value) {
  // append value to either a or b
  if (!operator) {
    a += value;
    display.value = a;
  } else {
    b += value;
    display.value = b;
  }
}

function operate() {
  if (isNaN(a) || isNaN(b)) return;

  a = parseFloat(a);
  b = parseFloat(b);

  let result;
  if (operator === "+") result = add(a, b);
  if (operator === "-") result = subtract(a, b);
  if (operator === "*") result = multiply(a, b);
  if (operator === "/") result = divide(a, b);

  a = result;
  b = "";
  operator = "";

  updateDisplay(a);
}

function updateDisplay(value) {
  display.value = value;
}

function clearDisplay() {
  a = "";
  b = "";
  operator = "";
  display.value = "";
}
clearBtn.addEventListener("click", clearDisplay);

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;

    if (!isNaN(value)) {
      appendValue(value);
    } else if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      if (a && b && operator) {
        operate();
      }
    } else {
      // set operator if none is set yet
      if (!operator) {
        operator = value;
      }
    }
  });
});
