const sTart = document.querySelector('#start')
const sTop = document.querySelector('#stop')
// const intervalId = setInterval(sayDate, 1000, "hi")    
let intervalId = null

const sayDate = (str) => {
    // console.time("Interval Execution Time");
    console.log(str, new Date().toLocaleTimeString());
    // console.timeEnd("Interval Execution Time");
};


sTart.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(sayDate, 1000, "hi")
        sTart.textContent = "Running...";
        sTart.style.background = "#ff0000";
        console.log(`Interval Started!!`)
    } else {
        console.log(`Interval is already running`)
    }
})

sTop.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId)
        console.log(`Interval Stopped!!`)
        intervalId = null
        sTart.textContent = "Start";
        sTart.style.background = "";
    } else {
        console.log(`No interval is running`)
    }
})