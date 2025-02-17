// JavaScript Program to Insert Item in an Array
var arr = [];

function insertItem(val) {
    arr.push(val);
    console.log(val);
}
insertItem(1);
insertItem(2);
insertItem(3);
// insertItem(4);
// insertItem(5);
console.log('+++++++++++++++++');
arr.forEach(element => {
    console.log(element);
});
console.log('+++++++++++++++++');
console.log(Array.isArray(arr)); 
