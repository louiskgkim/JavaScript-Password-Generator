// Assignment Code (this was already provided)
var generateBtn = document.querySelector("#generate");

// Array of Possible Character's to Use
var numbers = '0123456789'.split(
  ''
);
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split(
  ''
);
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);
var special = '{)}(]~[-_./!#$@^%?:%+)'.split(
  ''
);

[")", "(", "}", "{", "]", "[", "~", "-", "_", ".", "/", "!", "#", "$", "^", "?", ":", "@", "%", "+"];

// Function to prompt user options for password and minimum requirements
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose a password length between 8 and 128 characters");
    var askNumbers = confirm("Would you like your password to include numbers?");
    var askUpperCase = confirm("Would you like your password to include uppercase letters?");
    var askLowerCase = confirm("Would you like your password to include lowercase letters?");
    var askSpecial = confirm("Would you like your password to include special characters?");
    var responses = {
      length : length,
      askNumbers : askNumbers,
      askUpperCase : askUpperCase,
      askLowerCase : askLowerCase,
      askSpecial : askSpecial
    }
    if ((length < 8)||(length > 128))
      alert("Please choose a number between 8 and 128.");
      else if((!askNumbers)&&(!askUpperCase)&&(!askLowerCase)&&(!askSpecial))
      alert("Error. You must choose at least one type.");
      else
      isValid = true;
  } while(!isValid);
    return responses;
}

//  Function to merge the users response to generate a strong password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
    possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
    possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
    possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
    possibleCombo.push(i);
  }

  // Got some assistance from a friend regarding the if statements as I was stuck on this one for awhile

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)]; 
  }

  // Math.floor and Math.random was a good reminder from the mini project we did 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input (this was already provided)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button (this was already provided)
generateBtn.addEventListener("click", writePassword);
