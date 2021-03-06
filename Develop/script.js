// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLowerCase = "abcdefghijklmnopqrstuvwxyz";
var passwordNumber = "0123456789";
var specialCharacter ="!@#$%^&*()?<>:{}|~";
var finalPassword = " ";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
  var finalPassword="";
  var specialCharacter ="!@#$%^&*()?<>:{}|~"
  var passlength = prompt("# of characters?, Must be 8 characters minimum")
    console.log(passlength);
  var wantsUppercase = confirm("Would you like to use uppercase letters?")
    console.log(wantsUppercase);
  var wantsLowercase = confirm("Would you like to use lowercase letters?")
    console.log(wantsLowercase);
  var wantsNumbers = confirm("Would you like to use numbes?")
    console.log(wantsNumbers);
  var wantsSpecialCharacters = confirm("Would you like to use special characters?")
    console.log(wantsSpecialCharacters);

  for (let i = 0; i < passlength; i++){
    var char = Math.floor(Math.random()
  }


  return finalPassword; 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
