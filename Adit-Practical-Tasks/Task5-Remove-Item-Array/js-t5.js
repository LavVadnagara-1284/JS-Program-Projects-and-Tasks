// JavaScript Program to Remove Specific Item from an Array

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr = [22, 45, 11, 46, 47, 48, 49, 50, 51];

function removeItem(val) {
    
    var index = arr.indexOf(val);
    
    if (index > -1) {
    
        console.log(`Original array: ${arr}`);
    
        if (index > -1) {
            arr.splice(index, 1);
        }
    
        console.log(`Removed value: ${val}`);
    
        console.log(`New array: ${arr}`);
    
    } else {
        console.log("Invalid value to remove.");
    }
}

// removeItem(5);
removeItem(47);