const display = document.getElementById("display");
let n1 = "", n2 = "", operator = "";
let clear = false;

function appendToDisplay(input) {
    if (["+", "-", "*", "/"].includes(input)) {
        if (n1 === "") {
            n1 = display.value; 
        }
        
        if (operator === "") { 
            operator = input;
            clear = true;
        }
    } else {
        if (clear) {
            display.value = "";  
            clear = false;
        }
        display.value += input; 
    }
}

function clearDisplay() {
    display.value = "";
    n1 = "";
    n2 = "";
    operator = "";
}

function calculate() {
    if (n1 !== "" && operator !== "" && display.value !== "") {
        n2 = display.value; 
        let result;

        switch (operator) {
            case '+':
                result = parseFloat(n1) + parseFloat(n2);
                break;
            case '-':
                result = parseFloat(n1) - parseFloat(n2);
                break;
            case '*':
                result = parseFloat(n1) * parseFloat(n2);
                break;
            case '/':
                result = parseFloat(n1) / parseFloat(n2);
                break;
        }

        display.value = result;
        n1 = result.toString();  
        n2 = "";
        operator = "";
        clear = true;
    }
}
