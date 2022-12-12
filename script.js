function generatePassword() {
 
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var userSelection = [];

  var passwordLength = getPasswordLength();

  var charSelected = false;

  while (charSelected == false) {

    var specialChar = getChoice("special");
    var numberChar = getChoice("number");
    var lowercase = getChoice("lowercase");
    var uppercase = getChoice("uppercase");

    if ((lowercase) || (uppercase) || (numberChar) || (specialChar)) {
      charSelected = true;

    } else {
      window.alert("It is imperative you select at least one charcter type.")
    }
  }

  if (lowercase) {
    userSelection = userSelection.concat(lowercaseSet);
  }
  if (uppercase) {
    userSelection = userSelection.concat(uppercaseSet);
  }
  if (numberChar) {
    userSelection = userSelection.concat(numSet);
  }
  if (specialChar) {
    userSelection = userSelection.concat(symbolSet);
  }

  var passwordSet = "";

  for (var i = 0; i < passwordLength; i++) {
    passwordSet += userSelection[Math.floor(Math.random() * (userSelection.length))];
  }

  return passwordSet;
}

function getPasswordLength() {
  var userSelect = 0;
  while ((userSelect < 8) || (userSelect > 128)) {
    userSelect = parseInt(window.prompt("How many characters would you like your password to be? Select a number between 8 - 128."));

    if (isNaN(userSelect)) {
      userSelect = 0;
    }
  }
   return userSelect;
}

function getChoice(currentSelection) {

  var userChoice = "a",
    messagePrompt = "";

  var messagePrompt = ('Would you like '.concat(currentSelection));

  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  
  while (userChoice = "a") {

    userChoice = (window.prompt(messagePrompt));

    userChoice = userChoice.toLowerCase();

    if (userChoice == "y") {
      return true;

    } else if (userChoice == "n") {
      return false;
    }
  }
}

var generateButton = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateButton.addEventListener("click", writePassword);
