// var arr = [1, 2, 3, 4, 5];

// // Function to display the list
// function displayList() {
//     var ul = document.getElementById('numberList');
//     ul.innerHTML = ''; // Clear the existing list
//     // for (var i = 0; i < arr.length; i++) {
//     //     ul.innerHTML += `<li>${arr[i]}</li>`;
//     // }
//     arr.forEach(num => {
//         let li = document.createElement('li');
//         li.textContent = num;
//         ul.appendChild(li);
//     });
// }
// displayList();

// // Function to add a new number to the array
// function addOneNumber() {
//     var nextNumber = arr.length + 1;
//     arr.push(nextNumber); // Add the next number to the array
//     displayList(); // Update the list display
// }
// function addFiveNumbers() {
//     for (let i = 0; i < 5; i++) {
//         var nextNumber = arr.length + 1;
//         arr.push(nextNumber); // Add the next five numbers to the array
//         displayList(); // Update the list display
//     }
// }

var arr = [1, 2, 3, 4, 5];

const addOneBtn = document.getElementById('addOneBtn');
const addFiveBtn = document.getElementById('addFiveBtn');

// Display the list initially
function displayList() {
    var ul = document.getElementById('numberList');
    ul.innerHTML = '';
    arr.forEach(num => {
        let li = document.createElement('li');
        li.textContent = num;
        ul.appendChild(li);
    });
}

displayList();

function addOneNumber() {
    var nextNumber = arr.length + 1;
    arr.push(nextNumber);
    appendToList(nextNumber);
}

function appendToList(number) {
    var ul = document.getElementById('numberList');
    var li = document.createElement('li');
    li.textContent = number;
    ul.appendChild(li);
}

function addFiveNumbers() {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 5; i++) {
        var nextNumber = arr.length + 1;
        arr.push(nextNumber);

        var li = document.createElement('li');
        li.textContent = nextNumber;
        fragment.appendChild(li);
    }
    document.getElementById('numberList').appendChild(fragment);
}

addOneBtn.addEventListener('click', addOneNumber);
addFiveBtn.addEventListener('click', addFiveNumbers);