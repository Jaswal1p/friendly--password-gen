
const includeUpper = document.getElementById("includeUpper")
const includeLower = document.getElementById("includeLower")
const includeSpecial = document.getElementById("includeSpecial")
const includeNumber = document.getElementById("includeNumber")

const form = document.getElementById('passwordGeneratorForm')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(33, 47)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = CharacterAmountNumber.value
  const includeUpper = includeUpperElement.checked
  const includeLower = includeLowerElement.checked
  const includeSpecial = includeSpecialElement.checked
  const includeNumber = includeNumberElement.checked

  const password = generatePassword(characterAmount, includeUpper, includeLower, includeNumber, includeSpecial)
})

function generatePassword(characterAmount, includeUpper, includeLower, includeNumber, includeSpecial) {
  console.log(UPPERCASE_CHAR_CODES)
}

function arrayFromLowToHigh(low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Ended here at 4:55 PM















// Alert users for password generator  
window.alert("Welcome to Password Generator! Press 'Enter'");

  var promptCharacterAmount = window.alert("Password should have minimum 8 characters and cannot have more than 128 chracters.");
  var promptUpper = window.alert("At least 2 upper case letters");
  var promptLower = window.alert("At least 2 lower case letters");
  var promptSpecial = window.alert("At least 2 special characters");
  var promptNumber = window.alert("At least 2 numbers");

// Generator has following functions - http://www.net-comber.com/charset.html

  function getRandomUpper() {
    String.characterUpper;
  }

  console.log(String.characterUpper);

  var passLength = window.prompt("How many characters will you include in your password?");
  
  var characterNames = ["Upper", "Lower" , "Special", "Number"];
  console.log(characterNames);

  var characterUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  console.log(characterUpper);

  var characterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  console.log(characterLower);

  var characterNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(characterNumber);

  var characterSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"]
  console.log(characterSpecial);

  if (confirm('Will you include lower case letter?')) {
    // true 
  } else {
    // false
  }

  let isExecuted = confirm("Will you include upper-case character?");

  if (confirm('Will you include lower case letter?')) {
    // true 
  } else {
    // false
  }

  if (confirm('Will you include special character?')) {
    // true 
  } else {
    // false
  }

  if (confirm('Will you include numbers?')) {
    // true 
  } else {
    // false
  }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(promptGenerate);

// if player choses <8 charecters
if (passwordLength <8) {
    window.alert("Please pick atleast one more charecter. Remember to follow all criteria");
}

if (passwordLength >128) {
    window.alert("Please remove atleast one more charecter. Remember to follow all criteria");
}
 

  passwordText.value = password;

  var promptUppercase = window.prompt("Would you like to use upper case letter in password? Enter 'YES' or 'NO' to chose.");

  var promptLowercase = window.prompt("Would you like to use lower case letter in password? Enter 'YES' or 'NO' to chose.");

  var promptSpecial = window.prompt("Would you like to use special character in password? Enter 'YES' or 'NO' to chose.");

  var promptNumber = window.prompt("Would you like to use number in password? Enter 'YES' or 'NO' to chose.");


  // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);
}