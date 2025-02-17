const randomColor = () => {
    const hexVal = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexVal[Math.floor(Math.random() * 16)]
    }
    return color;
}

const hexCodeVal = document.getElementById('hexCode')

let intervalID

const startChangingColor = () => {

    if (!intervalID) {
        intervalID = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        hexCodeVal.innerText = `${randomColor()}`
    }
}
const stopChangingColor = () => {
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)