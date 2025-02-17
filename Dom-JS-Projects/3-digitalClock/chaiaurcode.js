const clock = document.getElementById('time')
const Wdate = document.getElementById('date')

setInterval( () => {
    let dateNtime = new Date()
    clock.innerHTML = `Time: ${dateNtime.toLocaleTimeString()}`;    
    Wdate.innerHTML = `Date: ${dateNtime.toLocaleDateString()}`;    
}, 1000)
