function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  let ans;
  if (operator == "add") {
    ans = add(a, b);
  } else if (operator == "subtract") {
    ans = subtract(a, b);
  } else if (operator == "divide") {
    ans = divide(a, b);
  } else {
    ans = multiply(a, b);
  }
  return Math.round(ans * 100) / 100;
}

const buttons = Array.from(document.querySelectorAll(".grid-item"));
let operand1, operation;
function changeOutput(e) {
  let curr = document.querySelector("#display").textContent;
  let id = e.target.id;
  // console.log(id);
  operations = ["add", "subtract", "divide", "multiply"];
  if (id == "clear") {
    document.querySelector("#display").textContent = "";
    operand1 = null;
    operation = null;
    return;
  } else if (id == "display") {
    return;
  } else if (id == "delete") {
    document.querySelector("#display").textContent = curr.slice(
      0,
      curr.length - 1
    );
    if (curr.length == 1) {
      document.querySelector("#display").textContent = "0";
    }
    return;
  } else if (curr === "") {
    document.querySelector("#display").textContent = "";
    if (id == "dot") {
      document.querySelector("#display").textContent += ".";
      return;
    }
  } else if (id == "dot") {
    if (curr.includes(".")) {
      return;
    }
    document.querySelector("#display").textContent += ".";
    return;
  } else if (operations.includes(id)) {
    if (operand1 == null) {
      operand1 = curr;
    } else {
      if (operation != null) operand1 = operate(operation, operand1, curr);
    }
    operation = id;
    document.querySelector("#display").textContent = "";
    return;
  } else if (id == "equals") {
    // console.log(operation);
    // console.log(operand1);
    // console.log(curr);
    if (operation == null) {
      return;
    }
    document.querySelector("#display").textContent = operate(
      operation,
      operand1,
      curr
    );
    operand1 = operate(operation, operand1, curr);
    // console.log(operand1);
    operation = null;
    return;
  }

  document.querySelector("#display").textContent += id;
  // else if(curr === "")
}

buttons.forEach(button => button.addEventListener("click", changeOutput));
