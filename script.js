
const includeUpper = document.getElementById("includeUpper")
const includeLower = document.getElementById("includeLower")
const includeSpecial = document.getElementById("includeSpecial")
const includeNumber = document.getElementById("includeNumber")

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

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
  passwordDisplay.innertext = password
})

function generatePassword(characterAmount, includeUpper, includeLower, includeNumber, includeSpecial) {
  let charcodes = LOWERCASE_CHAR_CODES
  if (includeUpper) charcodes = charcodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumber) charcodes = charcodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charcodes = charcodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(string.fromCharCode(characterCodes))
  }
  return passwordCharacters.join('')
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

//  var promptCharacterAmount = window.alert("Password should have minimum 8 characters and cannot have more than 128 chracters.");
//  var promptUpper = window.alert("At least 2 upper case letters");
//  var promptLower = window.alert("At least 2 lower case letters");
//  var promptSpecial = window.alert("At least 2 special characters");
//  var promptNumber = window.alert("At least 2 numbers");


// Generator has following functions - http://www.net-comber.com/charset.html

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*()'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

 



  var passLength = window.prompt("Enter 8 to start");
  
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
    window.alert("Please enter atleast 8 character length. Remember to follow all criteria");
}

if (passwordLength >128) {
    window.alert("Please enter no more than 128 character length. Remember to follow all criteria");
}
 

  passwordText.value = password;

  var promptUppercase = window.alert("You have to use lower case letters by default");

  var promptLowercase = window.prompt("Would you like to use lower case letter in password? Enter 'YES' or 'NO' to chose.");

  var promptSpecial = window.prompt("Would you like to use special character in password? Enter 'YES' or 'NO' to chose.");

  var promptNumber = window.prompt("Would you like to use number in password? Enter 'YES' or 'NO' to chose.");


  // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);
}