// Assignment code here
//DOM Elements
const generateBtn = document.getElementById('generate');

//Character code generation
let arrayFromLowtoHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const upperCase = arrayFromLowtoHigh(65, 90);
const lowerCase = arrayFromLowtoHigh(97, 122);
const numberCodes = arrayFromLowtoHigh(48, 57);
const symbolCodes = arrayFromLowtoHigh(33, 47)
      .concat(arrayFromLowtoHigh(58, 64))
      .concat(arrayFromLowtoHigh(91, 96))
      .concat(arrayFromLowtoHigh(123, 126));
// Get references to the #generate element

//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompts after clicking Generate Password
var passwordLength = confirm?("How many characters do you want for your new password? Please enter a number between 8 and 128.")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
