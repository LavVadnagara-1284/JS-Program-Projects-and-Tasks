document.addEventListener("DOMContentLoaded", function() {
    function validateEmail() {
        let emailInput = document.getElementById('email');
        let emailResult = document.getElementById('emailCheckResult');
        let emailValue = emailInput.value.trim(); // Trim spaces

        // Email regex (allows common TLDs)
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|co|io|info|biz|us|uk|in|ca|au)$/i;

        if (emailValue === "") {
            emailResult.innerText = "Please enter an email address";
            emailResult.style.color = "orange";
            emailInput.style.borderColor = "orange";
        } else if (emailRegex.test(emailValue)) {
            emailResult.innerText = "✅ Valid email";
            emailResult.style.color = "green";
            emailInput.style.borderColor = "green";
        } else {
            emailResult.innerText = "❌ Invalid email address";
            emailResult.style.color = "red";
            emailInput.style.borderColor = "red";
        }
    }

    document.getElementById("validateBtn").addEventListener("click", validateEmail);
});
