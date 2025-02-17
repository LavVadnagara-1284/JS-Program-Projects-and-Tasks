// JavaScript Program to Check Leap Year

let leapYearCheck = () => {
    let year = parseInt(document.getElementById('year').value)
    let resultText = '';
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultText = `, <span id="trueColorChange">"${year}"</span> is a leap year`
        return resultText;
    } else {
        resultText = `, <span id="falseColorChange">"${year}"</span> is not a leap year`
        return resultText;
    }
}

let leapYearCheckString = () => {
    let result = document.getElementById('result')
    result.innerHTML = leapYearCheck()
}

document.getElementById('check').addEventListener('click', leapYearCheckString)
