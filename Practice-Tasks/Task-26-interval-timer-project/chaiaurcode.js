const sTart = document.querySelector('#start')
const sTop = document.querySelector('#stop')
// const intervalId = setInterval(sayDate, 1000, "hi")    
let intervalId = null    

const sayDate = (str) => {
    console.log(str, Date.now())
}

sTart.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(sayDate, 1000, "hi")
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
    } else {
        console.log(`No interval is running`)
    }
})