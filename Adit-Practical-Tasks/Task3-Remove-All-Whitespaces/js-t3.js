// JavaScript Program to Remove All Whitespaces from a Text

function removeWhiteSpaces(str) {
    // return str.trim();
    // return str.replace(/\s/g, ''); 
    return str.split(' ').join(''); 
}

let text = "   Hello, World!   ";
console.log(`=> Before removing spaces: "${text}" \n=> After  removing spaces: "${removeWhiteSpaces(text)}"`); 