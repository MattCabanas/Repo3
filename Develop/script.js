// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
var passwordNumbers = "0123456789";
var specialCharacters ="!@#$%^&*()?<>:{}|~";
var finalPassword = " ";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
debugger

function generatePassword (){
  var finalPassword="";
  var specialCharacter ="!@#$%^&*()?<>:{}|~"

  var passLength = parseInt(prompt("# of characters?, min:8 Max:128")) 
    console.log(passLength);
      if (passLength <8){
        alert("password not long enough")
        generatePassword()
      }
      if (passLength >128){
        alert("password too long")
        generatePassword()
      }
  var wantsUppercase = confirm("Would you like to use uppercase letters?")
    console.log(wantsUppercase);
  var wantsLowercase = confirm("Would you like to use lowercase letters?")
    console.log(wantsLowercase);
  var wantsNumbers = confirm("Would you like to use numbes?")
    console.log(wantsNumbers);
  var wantsspecialCharacters = confirm("Would you like to use special characters?")
    console.log(wantsspecialCharacters);
    

  
    var PasswordAttributes = {
      Length: passLength, 
      Uppercase: wantsUppercase,
      Lowercase: wantsLowercase,
      Number: wantsNumbers,
      specialCharacter: wantsspecialCharacters
    
    }



  if (wantsUppercase = true) {
    PasswordAttributes.Uppercase = passwordUppercase
  }
  if (wantsLowercase = true) {
    PasswordAttributes.Lowercase = passwordLowercase
  }
  if (wantsspecialCharacters = true) {
    PasswordAttributes.specialCharacter = specialCharacters
  }
  if (wantsNumbers = true) {
    PasswordAttributes.Number = passwordNumbers
  }
    
 
  console.log(PasswordAttributes);


  function randomizer(){
  var randomnumber = Math.floor(Math.random()*passLength)
  }

  for (let i = 0; i < passLength; i++){
  } 
  
  return finalPassword; 
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
