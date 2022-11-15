// 98. => Generate a random number between 0 and 100 inclusively.
let value = Math.random() * 100;
console.log(Math.floor(value));

// 99. => Generate a random number between 50 and 100 inclusively.
let value1 = Math.random();
console.log(Math.round(value1 * 50) + 50); 

// 100. => Generate a random number of 3 digits
let value = Math.random() * 100;
console.log(Math.round(value) + 100);

// 101. => Generate a random number between 0 and 255 inclusively.
let value = Math.random() * 255;
console.log(Math.round(value) );


// 102. => What is the year today?
const now = new Date();
console.log(now.getFullYear());

// 103. => What is the month today as a number?
const now = new Date();
console.log(now.getMonth() + 1);

// 104. => What is the date today?
const now = Date();
const now1 = new Date();
console.log(now);
console.log(now1);

// 105. => What is the day today as a number?
const now = new Date();
console.log(now.getDay());

// 106. => What is the hours now?
let day = new Date();
console.log(day.getHours());

// 107. => What is the minutes now?
let day = new Date();
console.log(day.getMinutes());