console.log(`=> This is the for loop output: \n `);
for (let i = 0; i < 10; i++) {
    console.log(`${i + 1} `);
}

console.log(`\n\n => This is the while loop output: \n `);
let j = 0;
while (j < 10) {
    console.log(`${j + 1} `);
    j++;
}

console.log(`\n\n => This is the do while loop output: \n `);
let k = 0;
do {
    console.log(`${k + 1} `);
    k++;
} while (k < 10);

console.log(`\n\n => This is the forEach loop output: \n `);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(num => console.log(`${num * 2} `));

console.log(`\n\n => This is the forEach diff syntax loop output: \n `);
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num) => {
    console.log(`${num} `)
});

console.log(`\n\n => This is the for (with in keyword for object) loop output: \n `);
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}