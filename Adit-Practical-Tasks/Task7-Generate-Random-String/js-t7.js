// JavaScript Program to Generate Random String

const generateRandomString = () => {
    const stringCharacters = ' 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz'
    const size = stringCharacters.length
    let randomString = ''
    for (let i = 0; i < 20; i++) {
        randomString += stringCharacters[Math.floor(Math.random() * size)]
    }
    return randomString;
}
console.log(`Random String: ${generateRandomString()}`);