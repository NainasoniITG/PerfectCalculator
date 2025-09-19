let display = document.getElementById("display");

function valueNumber(num) {
    display.value += num;
}
function valueOperator(op) {
    if (display.value === "") return;
    const lastChar = display.value.slice(-1);
    // console.log(display.value.substr(0,display.value.length))
    if ("+-*/%".includes(lastChar) ){
        display.value  = display.value.substr(0,display.value.length-1) + op;
    }
    else{
        display.value += op;
    }
    printOutput();
}

function clearDisplay() {
    display.value = "";
}

function valueDot() {
    const parts = display.value.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes(".")) {
        display.value += ".";
        printOutput();
    }
}

function calculateSqrt() {
    if (display.value === "") return;
        const result = Math.sqrt((display.value));
        display.value = result.toString();
        printOutput();
}

function printOutput() {
    document.getElementById("display").value = display.value || "0";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
    printOutput()
}

function calculateSquare() {
    if (display.value === "") return;
        const result = display.value;
        display.value = (result * result).toString();
        printOutput();
}

function simpleCalc(exp) {
    let numbers = [];
    let operators = [];
    let num = "";
    for (let i = 0; i < exp.length; i++) {
        let ch = exp[i];
        if ("0123456789".includes(ch)) {
            num += ch;
        } else {
            numbers.push(parseFloat(num));
            num = "";
            operators.push(ch);
        }
    }
    numbers.push(parseFloat(num));
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            result += numbers[i + 1];
        }
        if (operators[i] === "-") {
            result -= numbers[i + 1];
        }
        if (operators[i] === "*") {
            result *= numbers[i + 1];
        }
        if (operators[i] === "/") {
            result /= numbers[i + 1];
        }
        if (operators[i] === "%") {
            result %= numbers[i + 1];
        }
    }
    return result;
}

function calculate() {
    let exp = display.value;
    let result = simpleCalc(exp);
    display.value = result;
    
}




