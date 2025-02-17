// Arrays with colors
let primaryColors = ['red', 'green', 'blue', 'black', 'white'];
let secondaryColors = ['yellow', 'cyan', 'magenta', 'grey'];

console.log("Primary Colors:", primaryColors);
console.log(`Length of Primary Colors Array: ${primaryColors.length}`);

// Concatenating arrays
let allColors = primaryColors.concat(secondaryColors);
console.log("Concatenated Colors Array:", allColors);

// Working with numeric arrays
let numbers = [1, 2, 3, 4, 5];
console.log("Original Numbers Array:", numbers);

// Pushing element
numbers.push(6);
console.log("After Push (Added 6):", numbers);

// Popping element
console.log(`Popped Element: ${numbers.pop()}`);
console.log("After Pop:", numbers);

// Reversing array
console.log("Reversed Array:", numbers.reverse());

// Shifting element (removes first element)
console.log(`Shifted Element: ${numbers.shift()}`);
console.log("After Shift:", numbers);

// Unshifting elements (adds elements at beginning)
numbers.unshift(5, 6);
console.log("After Unshift (Added 5,6 at start):", numbers);

// More array methods
console.log("Reversed Again:", numbers.reverse());
console.log("Sliced Array (Index 1 to 3):", numbers.slice(1, 3));
console.log("Joined Array with 'ab27':", numbers.join('ab27'));

// Sorting numbers array
let numArray = [55, 44, 99, 22, 66, 33, 11, 77, 88];
console.log("Sorted Numeric Array:", numArray.sort());
console.log("Array as String:", numArray.toString());

// Filtering an array (getting ages 21+ from the list)
const ages = [5, 12, 21, 33, 61, 55, 25, 23, 66, 44, 54, 67, 32, 13, 10, 20];
const canDrink = ages.filter(age => age >= 21).sort((a, b) => a - b);
console.log("Ages Eligible for Drinking:", canDrink);

// Employee Information Array
const employees = [
    { name: 'John Doe', id: 1, age: 30, city: 'New York' },
    { name: 'Jane Smith', id: 2, age: 25, city: 'Los Angeles' },
    { name: 'Bob Smith', id: 3, age: 40, city: 'Chicago' },
    { name: 'Alice Johnson', id: 4, age: 35, city: 'San Francisco' },
    { name: 'Mary Jane', id: 5, age: 28, city: 'New York' },
    { name: 'David Brown', id: 6, age: 32, city: 'Chicago' },
    { name: 'Emily Davis', id: 7, age: 27, city: 'San Francisco' },
    { name: 'Michael Lee', id: 8, age: 37, city: 'Los Angeles' },
    { name: 'Sarah Wilson', id: 9, age: 29, city: 'New York' },
    { name: 'Patrick Williams', id: 10, age: 33, city: 'Los Angeles' },
];

// Extracting names of employees
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

// Extracting names and ages
const employeeNameAge = employees.map(emp => `Name: ${emp.name}, Age: ${emp.age}`);
console.log("Employee Name & Age:", employeeNameAge);

// Using map and math operations on an array
let expArr = [55, 44, 99, 22, 66, 33, 11, 77, 88, 66, 33, 11, 77, 88, 66, 33, 11];
const transformedExpArr = expArr
    .map(num => Math.sqrt(num)) // Get square root
    .map(num => num * 5); // Multiply by 5

console.log("Transformed Array:", transformedExpArr);


// let listData = ['red', 'green', 'blue', 'black', 'white'];
// let secondaryData = ['yellow', 'cyan', 'magenta', 'grey'];
// console.log(listData);
// console.log(`lenght of the array = ${listData.length}`);
// console.log(`Concated array = ${listData.concat(secondaryData)}`);
// console.log(listData.concat(secondaryData));
// let arr = [1, 2, 3, 4, 5];
// console.log(`pushed element is ${arr.push(6)}`);
// console.log(`New array is ${arr}`);
// console.log(arr);
// console.log(`popped element is ${arr.pop()}`);
// console.log(`New array is ${arr}`);
// console.log(arr);
// console.log(`Reversed array is ${arr.reverse()}`);
// console.log(`Shifted element is ${arr.shift()}`);
// console.log(`New array is ${arr}`);
// console.log(arr);
// console.log(`Un Shifted element is ${arr.unshift(5, 6)}`);
// console.log(`New array is ${arr}`);
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.slice(1, 3));
// console.log(arr);
// console.log(`joined is ${arr.join('a' + 'b' + 27)}`);
// console.log(arr);
// let arrTosort = [55, 44, 99, 22, 66, 33, 11, 77, 88];
// console.log(arrTosort.sort());
// console.log(`this is the array as a string`);
// console.log(arrTosort.toString());

// const ages = [5, 12, 21, 33, 61, 55, 25, 23, 66, 44, 54, 67, 32, 13, 10, 20];
// // const canDrink = ages.filter(function(age) {
// //     if(age >= 21) {
// //         return true;
// //     }
// // });
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink.sort());

// const empInfo = [
//     { name: 'John Doe', id: 1, age: 30, city: 'New York' },
//     { name: 'Jane Smith', id: 2, age: 25, city: 'Los Angeles' },
//     { name: 'Bob Smith', id: 3, age: 40, city: 'Chicago' },
//     { name: 'Alice Johnson', id: 4, age: 35, city: 'San Francisco' },
//     { name: 'Mary Jane', id: 5, age: 28, city: 'New York' },
//     { name: 'David Brown', id: 6, age: 32, city: 'Chicago' },
//     { name: 'Emily Davis', id: 7, age: 27, city: 'San Francisco' },
//     { name: 'Michael Lee', id: 8, age: 37, city: 'Los Angeles' },
//     { name: 'Sarah Wilson', id: 9, age: 29, city: 'New York' },
//     { name: 'Patrick Williams', id: 10, age: 33, city: 'Los Angeles' },
// ];

// const Pnames = empInfo.map(onlyNames => onlyNames.name);
// console.log(Pnames);

// const EnameAge = empInfo.map(namesAges => `Name = ${namesAges.name} and Age = ${namesAges.age}`);
// console.log(EnameAge);

// let expArr = [55, 44, 99, 22, 66, 33, 11, 77, 88, 66, 33, 11, 77, 88, 66, 33, 11];
// const expArrMap = expArr
//     .map(sr => Math.sqrt(sr))
//     .map(sr => sr * 5);
// console.log(expArrMap);