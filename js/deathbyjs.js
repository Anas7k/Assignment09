//STEP 1
// function sortStringAlphabetically() {
//     const str = prompt('Enter a string to sort alphabetically:');
//     const sortedStr = str.split('').sort().join('');
//     console.log(sortedStr);
// }

// sortStringAlphabetically();


//STEP 2
// function capitalizeFirstLetterOfEachWord() {
//     const str = prompt('Enter a string to capitalize the first letter of each word:');
//     const capitalizedStr = str.replace(/\b\w/g, char => char.toUpperCase());
//     console.log(capitalizedStr);
// }

// capitalizeFirstLetterOfEachWord();

//STEP 3
// function countVowels() {
//     const str = prompt('Enter a string to count vowels:');
//     const vowelCount = str.match(/[aeiou]/gi).length;
//     console.log(vowelCount);
// }

// countVowels();

//STEP 4
// function generateRandomStringId() {
//     const length = parseInt(prompt('Enter the length of the random string ID:'));
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     console.log(result);
// }

// generateRandomStringId();

//STEP 5
// function longestCountryName(countryNames) {
//     return countryNames.reduce((longest, current) => current.length > longest.length ? current : longest, '');
// }

// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));