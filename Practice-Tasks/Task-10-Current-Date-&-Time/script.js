let is24HourFormat = true;

function updateTime() {
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let amPm = hours >= 12 ? "PM" : "AM";

    let formattedTime;
    if (!is24HourFormat) {
        hours = hours % 12 || 12;
        formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }

    document.getElementById('clock').innerText = formattedTime;
    document.getElementById('date').innerText = `${day}-${month}-${year}`;
}

document.getElementById("toggleFormat").addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    document.getElementById("toggleFormat").innerText = is24HourFormat
        ? "Switch to 12-Hour Format"
        : "Switch to 24-Hour Format";
});

setInterval(updateTime, 1000);
updateTime();