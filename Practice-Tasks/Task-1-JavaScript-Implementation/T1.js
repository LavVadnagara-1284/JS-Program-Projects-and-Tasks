console.log('Welcome to the console of the task 1');
alert('Welcome to the alert of the task 1');
document.addEventListener("DOMContentLoaded", () => {
    const greetMessage = () => {
        document.getElementById('message').innerText = 'Hey! You clicked the button!'
    }
    document.getElementById("clickBtn").addEventListener("click", greetMessage);
});