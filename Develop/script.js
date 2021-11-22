// Assignment Code
var generateBtn = document.querySelector("#generate");

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES  = arrayFromLowToHigh(33, 47)

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if 
  String.fromCharCode(65)
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//comment//
