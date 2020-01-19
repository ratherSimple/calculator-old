function add(a, b) {
    return +a + +b;
}

function subtract(a ,b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {
    if(operator == "add") {
        return add(a, b);
    }
    else if( operator == "subtract") {
        return subtract(a, b);
    }
    else if( operator == "divide") {
        return divide(a, b);
    }
    else {
        return multiply(a, b);
    }
}

const buttons = Array.from(document.querySelectorAll(".grid-item"));
let operand1, operation;
function changeOutput(e) {
    let curr = document.querySelector("#display").textContent;
    let id = e.target.id;
    operations = ["add", "subtract", "divide", "multiply"];
    if(id == "clear") {
        document.querySelector("#display").textContent = "0";
        return;
    }
    else if(id == "display") {
        return;
    }
    else if(id == "delete") {
        document.querySelector("#display").textContent = curr.slice(0, curr.length-1);
        if(curr.length == 1) {
            document.querySelector("#display").textContent = "0";
        }
        return;
    }
    else if(curr === "0") {
        document.querySelector("#display").textContent = "";
        if(id == "dot") {
            document.querySelector("#display").textContent += ".";
            return;
        }
    }
    else if(id == "dot") {
        document.querySelector("#display").textContent += ".";
        return;
    }
    else if(operations.includes(id) && operation == null) {
        operand1 = curr;
        operation = id;
        document.querySelector("#display").textContent = "0";
        return;

    }
    else if(id == "equals" || operation) {
        document.querySelector("#display").textContent = operate(operation, operand1, curr);
        if(operation) {
            operand1 = curr;
            // document.querySelector("#display").textContent = "0";
            operation = id;
            return;
        }
        operation = null;
        return;
    }

    document.querySelector("#display").textContent += id;
    // else if(curr === "")
}

buttons.forEach(button => button.addEventListener('click', changeOutput)); 