
function passwordGenerator() {
  let length =
    document.getElementById("passLength").value == ""
      ? 12
      : document.getElementById("passLength").value;
  let charset = "abcdefghijklmnopqrstuvwxyz",
    charsetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    charsetNumber = "0123456789",
    charsetSymbol = "!@#$%^&*/<>(){}[]\\|`~+-.?,\"';:",
    retVal = "";

  /* includes capital letters to the char set */
  document.getElementById("includeCapital").checked ? charset += charsetCapital : null;
  /* includes numbers to the char set */
  document.getElementById("includeNumbers").checked ? charset += charsetNumber : null;
  /* includes symbols to the char set */
  document.getElementById("includeSymbols").checked ? charset += charsetSymbol : null;
  
  /* generate random password form the charset */
  for (i = 0, n = charset.length; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  /* display the generated password in the text field */
  document.getElementById("textField").value = retVal;
}


function validatePassword() {
  let newPassword = document.getElementById("checkPassword").value;
  const capitalRegex = /[A-Z]/;
  const smallRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[!@#$%^&*/<>(){}[\]\\|`~+-.?,\"';:]/;
  let capitalCheck = document.getElementById("capital");
  let smallCheck = document.getElementById("small");
  let numberCheck = document.getElementById("number");
  let symbolCheck = document.getElementById("symbol");
  let passLengthCheck = document.getElementById("passLength");

/* change the icon and color for the checked conditions */
  function checkIcon(myElementID) {
    myElementID.firstChild.classList.add("bi-check-square");
    myElementID.firstChild.classList.remove("bi-x-circle");
    myElementID.style.color = "#059505";
  }

/* change the icon and color for the unchecked conditions */
  function xIcon(myElementID) {
    myElementID.firstChild.classList.add("bi-x-circle");
    myElementID.firstChild.classList.remove("bi-check-square");
    myElementID.style.color = "#212529";
  }

  /* check if the password contains capital letters */
  newPassword.match(capitalRegex) ? checkIcon(capitalCheck) : xIcon(capitalCheck);
  /* check if the password contains small letters */
  newPassword.match(smallRegex) ? checkIcon(smallCheck) : xIcon(smallCheck);
  /* check if the password contains numbers */
  newPassword.match(numberRegex) ? checkIcon(numberCheck) : xIcon(numberCheck);
  /* check if the password contains symbols */
  newPassword.match(symbolRegex) ? checkIcon(symbolCheck) : xIcon(symbolCheck);
  /* check if the password is more than 8 charecters */
  newPassword.length >= 8 ? checkIcon(passLengthCheck) : xIcon(passLengthCheck);

}

function copyFunc() {
  /* Get the text field */
  let copyText = document.getElementById("textField");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}