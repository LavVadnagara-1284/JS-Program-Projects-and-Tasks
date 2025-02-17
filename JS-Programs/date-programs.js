// Creating a new Date object
let myDate = new Date();

// Displaying various date formats with descriptions
console.log(`Full Date and Time (toString()): ${myDate.toString()}`);
console.log(`\nDate in Readable Format (toDateString()): ${myDate.toDateString()}`);
console.log(`\nLocalized Date & Time (toLocaleString()): ${myDate.toLocaleString()}`);
console.log(`\nJSON Format (toJSON()): ${myDate.toJSON()}`);
console.log(`\nISO Format (toISOString()): ${myDate.toISOString()}`);
console.log(`\nLocalized Date Only (toLocaleDateString()): ${myDate.toLocaleDateString()}`);
