// JavaScript Program to Generate Random String

const randomStringVal = document.getElementById('randomString')
const generateRandomString = () => {

    const stringSize = parseInt(document.getElementById('size').value);

    if(stringSize > 0 ) {
        const stringCharacters = ' 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz'

        const size = stringCharacters.length
        let randomString = ''

        for (let i = 0; i < stringSize; i++) {
            randomString += stringCharacters[Math.floor(Math.random() * size)]
        }
        return randomString;
    } else if(stringSize == undefined) {
        alert('Please enter a valid positive integer for string size.')
    } else {
        alert('Please enter a valid positive integer for string size.')
    }

}

const createRandomString = () => randomStringVal.innerText = `${generateRandomString()}`

document.querySelector('#create').addEventListener('click', createRandomString)
