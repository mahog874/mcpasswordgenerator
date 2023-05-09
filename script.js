// Assignment code here
//GIVEN I need a new, secure password
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


 var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "/?><.',;:]}{[=+-0987654321)(*&^%$#@!`~";



  function generatePassword() {
    var password = "";
    var length = parseInt(prompt("Choose a length between 8 and 128 characters"));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length! Please choose a length between 8 and 128 characters.");
      return password;
    }
    var includeUppercase = confirm("Include uppercase letters? Press OK for Yes or Cancel for No.");
    var includeLowercase = confirm("Include lowercase letters? Press OK for Yes or Cancel for No.");
    var includeSpecialChars = confirm("Include special characters? Press OK for Yes or Cancel for No.");
    var includeNumbers = confirm("Include numbers? Press OK for Yes or Cancel for No.");
    
    if (includeUppercase === null && includeLowercase === null && includeSpecialChars === null && includeNumbers === null) {
      alert("You must select at least one character type!");
      return password;
    }
    
    var selectedChars = "";
  if (includeUppercase) {
    selectedChars += uppercase;
  }
  if (includeLowercase) {
    selectedChars += lowercase;
  }
  if (includeSpecialChars) {
    selectedChars += specialChars;
  }
  if (includeNumbers) {
    selectedChars += numbers;
  }
    
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars[randomIndex];
    }
    
    return password;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
