let greetUser = () => {
    let userGreetMessage = document.getElementById('greetMessage');
    let name = prompt("Please enter your name:");
    // alert(`Hello, ${name}!`);
    if (!name) { // If name is empty or user clicks "Cancel"
        userGreetMessage.innerHTML = "Guest";
    } else {
        userGreetMessage.innerHTML = name;
    }
}

greetUser();

const timeContainer = document.getElementById('timeContainer');
const times = [
    { name: 'morning', start: 4, end: 12 },
    { name: 'afternoon', start: 12, end: 18 },
    { name: 'evening', start: 18, end: 20 },
    { name: 'night', start: 20, end: 24 }
];
const now = new Date();
const hours = now.getHours();
// console.log(now);
// console.log(`Current time: ${now.getHours()}:${now.getMinutes()}`);

// Default to "night" in case no match is found
let currentTime = { name: 'night'};

for (let time of times) {
    if (hours >= time.start && hours < time.end) {
        currentTime = time;
        break; // Stop the loop as soon as a match is found
    }
}

timeContainer.dataset.time = currentTime.name;
timeContainer.textContent = `Good ${currentTime.name}!`;
