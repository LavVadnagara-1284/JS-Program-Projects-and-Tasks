function submitBtn() {
    let val1 = parseInt(document.querySelector("#val1").value);
    let val2 = parseInt(document.querySelector("#val2").value);
    let operator = document.querySelector("#operator").value;
    let result = "";

    if (isNaN(val1) || isNaN(val2)) {
        result = "Error: Please enter valid numbers for both values.";
    } else {
        switch (operator) {
            case '+':
                result = `Addition = ${val1 + val2}`;
                break;
            case '-':
                result = `Subtraction = ${val1 - val2}`;
                break;
            case '*':
                result = `Multiplication = ${val1 * val2}`;
                break;
            case '/':
                if (val2 === 0) {
                    result = "Error: Division by zero.";
                } else {
                    result = `Division = ${val1 / val2}`;
                }
                break;
            default:
                result = "Error: Please select a valid operator.";
                break;
        }
    }

    // Output the result in the 'result' span.
    document.querySelector("#result").textContent = result;
}