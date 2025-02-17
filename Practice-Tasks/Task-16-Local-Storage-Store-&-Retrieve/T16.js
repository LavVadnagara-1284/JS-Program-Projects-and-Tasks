// Check if data exists in localStorage on page load
window.onload = () => {

    let savedData = localStorage.getItem("userData");

    if (savedData) {
        document.getElementById("output").textContent = `Saved Data: ${savedData}`;
    }
};

// Save input value to localStorage when "Save" button is clicked
document.getElementById("saveBtn").addEventListener("click", () => {

    let inputVal = document.getElementById("userInput").value.trim();

    if (inputVal) {
        localStorage.setItem("userData", inputVal);
        document.getElementById("output").textContent = `Saved Data: ${inputVal}`;
    } else {
        alert("Please enter a value before saving!");
    }
});

// Clear localStorage when "Clear Data" button is clicked
document.getElementById("clearBtn").addEventListener("click", () => {
    localStorage.removeItem("userData");
    document.getElementById("output").textContent = "No data saved.";
});