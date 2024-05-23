//STEP 1
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let month = prompt("Enter a month as a digit:\nE.g., January = 1, February = 2, etc.");
// let year = prompt("Enter a year");

// if (isNaN(month) || isNaN(year)) {
//     console.log("Please enter valid numbers for the month and year");
// } else {
//     month = parseInt(month, 10);
//     if (month < 1 || month > 12) {
//         console.log("Please enter a valid month.");
//     } else {
//         year = parseInt(year, 10);
//         let date = new Date(year, month, 0);
//         console.log("There are " + date.getDate() + " days in " + months[date.getMonth()] + " " + date.getFullYear());
//     }
// }

//STEP 2
// let inputDate, date, months, pattern;

// months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// inputDate = prompt("Please enter a date. (MM/DD/YYYY)").trim();
// pattern = new RegExp("^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$");
// if (!pattern.test(inputDate)) {
//     console.log(inputDate + " is not a valid date in the format (MM/DD/YYYY).");
// } else {
//     date = new Date(inputDate);
//     console.log(inputDate + " is in the month of " + months[date.getMonth()]);
// }

//STEP 3
// let inputDate, date, months, pattern;

// months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// inputDate = prompt("Please enter a date. (MM/DD/YYYY)").trim();
// pattern = new RegExp("^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$");
// if (!pattern.test(inputDate)) {
//     window.console.log(inputDate + " is not a valid date in the format (MM/DD/YYYY).");
// } else {
//     date = new Date(inputDate);
//     if (date.getDay() === 0 || date.getDay() === 6) {
//         console.log(inputDate + " is on a weekend.");
//     } else {
//         console.log(inputDate + " is on a weekday.");
//     }
// }

//STEP 4
// let date = new Date();
// date.setDate(date.getDate() - 1);
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("Yesterday was: " + days[date.getDay()]);

// STEP 5
// let date = new Date();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("First letter of today: " + days[date.getDay()].charAt(0));
