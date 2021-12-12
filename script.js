
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


      if (characterLength<8) {
        window.alert("Please enter atleast 8 character length. Remember to follow all criteria and start again");
        return;
        } 
    
        if (characterLength >128) {
        window.alert("Please enter no more than 128 character length. Remember to follow all criteria and start again");
        return;
        }
    
        else  {
        Window.alert("That is acceptable")
        }

    
  
  
}

// Get references to the #generate element
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
