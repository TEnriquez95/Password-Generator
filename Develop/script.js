// Assignment code here
//DOM Elements
const generateBtn = document.getElementById('generate');



const upperCase = arrayFromLowtoHigh(65, 90);
const lowerCase = arrayFromLowtoHigh(97, 122);
const numberCodes = arrayFromLowtoHigh(48, 57);
const specialCodes = arrayFromLowtoHigh(33, 47)
      .concat(arrayFromLowtoHigh(58, 64))
      .concat(arrayFromLowtoHigh(91, 96))
      .concat(arrayFromLowtoHigh(123, 126));
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompts after clicking Generate Password
var passwordLength = prompt("How many characters do you want for your new password? Please enter a number between 8 and 128.");
var lowerCaseSelect = confirm("Would you like it to include lowercase characters?");
var upperCaseSelect = confirm("Would you like it to include uppercase characters?");
var numericSelect = confirm("Would you like it to include numeric values?")
var specialSelect = confirm("Would you like it to include special characters?")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Password generating function
let generatePassword = (
  passwordLength,
  lowerCaseSelect,
  upperCaseSelect,
  numericSelect,
  specialSelect
) => {
  let charCodes = lowerCase;
  if (upperCaseSelect === true) charCodes = charCodes.concat(upperCase);
  if (lowerCaseSelect === true) charCodes = charCodes.concat(lowerCase);
  if (numericSelect === true) charCodes = charCodes.concat(numberCodes);
  if (specialSelect === true) charCodes = charCodes.concat(specialCodes);
  const passwordCharacters = [];
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = 
      charCodes[Math.floor(math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join(" ");
};

//Character code generation
let arrayFromLowtoHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};