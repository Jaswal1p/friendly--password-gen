
// Assignment code here

var button = document.querySelector('button');
button.onclick = function() {
  window.alert("Welcome to Password Generator! Press 'OK'");
  
  promptCharacterLength = window.alert("Password should have minimum 8 characters and no more than 128 chracters.");

  Criteria = window.alert("Password should include combination of numbers, special characters, uppercase and lowercase letters. Please pick criteria on next prompt windows.");

  window.alert("Pick from following criteria");
  
  var characterLength = window.prompt("Enter the number of characters from 8 to 128")
  console.log(characterLength);

  var promptUppercase = window.prompt("Would you like to use lower case letter in password? Enter 'YES' or 'NO'");
      console.log(promptUppercase);

  var promptLowercase = window.prompt("would you like to use lower case letter in password? Enter 'YES' or 'NO'");
      console.log(promptLowercase);
      
  var promptNumbers = window.prompt("would you like to use numbers in password? Enter 'YES' or 'NO'");
      console.log(promptNumbers);
      
  var promptSpecial = window.prompt("would you like to use special character in password? Enter 'YES' or 'NO'");
      console.log(promptSpecial);


      if (characterLength<8) {
        window.alert("Please enter atleast 8 character length. Remember to follow all criteria and start again");
        return;
        } 
    
      if (characterLength >128) {
        window.alert("Please enter no more than 128 character length. Remember to follow all criteria and start again");
        return;
        }
    
      else  {
        window.alert("That is acceptable")
        }

} 

function generatePassword(lower, upper, number, special, length) {

  let generatedPassword = '';
  const typesCount = lower +upper + number + special;
  console.log('typesCount: ', typesCount)
  const typesArr = [{lower}, {upper}, {number}, {special}]
  console.log('typesarr: ', typesArr);
}

function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()";
  var allChars = numberChars + upperChars + lowerChars + specialChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
// Get references to the #generate element
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}// Add event listener to generate button

alert(generatePassword(8));

