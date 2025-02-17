// Task 7: Manage a To-Do List
// Objective: Add, remove, and display tasks using an array.

let arr = []

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    let toDoValue = document.getElementById('toDoString').value;

    if (toDoValue.trim() === "") { // this will prevent empty tasks
        alert("Please enter a task!");
    } else {
        arr.push(toDoValue);
        console.log(arr);
        
        addString();
    }
    document.getElementById('toDoString').value = ''; // this will clear the input field
})

function addString() {
    let resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    arr.forEach((task, index) => {
        resultList.innerHTML += `<li>${task} <button class="removeBtn" onclick="removeTask(${index})">❌</button></li>`;
    });

    resultList.style.display = 'block'; // Make the list visible
}

// Function to remove a task
function removeTask(index) {
    arr.splice(index, 1); // Remove task from array
    addString(); // Update the list
}
