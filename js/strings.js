//STEP 1
// let name = prompt("Enter your name:").trim();
// alert("The length of your name is: " + name.length);

//STEP 2
// let name = prompt("Enter your name:").trim();
// let position = prompt("Enter a number to find the character at that position:");
// alert("The character at position " + position + " is: " + name.charAt(position - 1));

//STEP 3
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// alert("Your name is: ".concat(firstName).concat(" ").concat(lastName))

//STEP 4
// let text = "The quick brown fox jumps over the lazy dog";
// alert("\"" + text + "\"\n'fox' is at index " + text.indexOf("fox"));

//STEP 5
// let text = "The quick brown fox jumps over the lazy fox";
// alert("\"" + text + "\"\nThe last 'fox' is at index " + text.lastIndexOf("fox"));

//STEP 6
// let text = "The quick brown fox jumped over the lazy dog";
// let name = prompt("Please enter your name.").trim();
// let output = text.replace("the lazy dog", name);
// alert(output);

//STEP 7
// let text = "The quick brown fox jumps over the lazy dog";
// let word = prompt("Please enter a word").trim();
// let searched = text.indexOf(word);
// alert("\"" + text + "\" \nThe word '" + word + "' is " + (text.includes(word) ? "found" : "not found") + " in the text at index " + searched);

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(old_string.indexOf("the lazy dog"));
// alert(new_string.toUpperCase());

//STEP 9
// let text = "      THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(text.trim().toLowerCase());

//STEP 10
// let text = "the quick brown fox jumps over the lazy dog";
// let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
// alert(capitalizedText);
