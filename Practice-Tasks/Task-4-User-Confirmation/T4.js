let confirmationValue = confirm('Are you sure you want to Continue');

let message = document.getElementById('message');

if (confirmationValue) {
    message.textContent = `You have confirmed the action!`;
} else {
    message.textContent = `You have canceled the action!`;
}