function passwordGenerator() {
  var length =
    document.getElementById("passLength").value == ""
      ? 8
      : document.getElementById("passLength").value;
  var charset = "abcdefghijklmnopqrstuvwxyz",
    charsetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    charsetNumber = "0123456789",
    charsetSymbol = "!@#$%^&*",
    retVal = "";

  if (document.getElementById("includeCapital").checked) {
    charset += charsetCapital;
  }
  if (document.getElementById("includeNumbers").checked) {
    charset += charsetNumber;
  }
  if (document.getElementById("includeSymbols").checked) {
    charset += charsetSymbol;
  }

  for (var i = 0, n = charset.length; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  document.getElementById("textField").value = retVal;
}

// function passwordGenerator() {
//   var length = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   // console.log(retVal);
//   document.getElementById("textField").value = retVal;

//   // return retVal;
// }

function validatePassword() {
  var newPassword = document.getElementById("checkPassword").value;
  const capitalRegex = /[A-Z]/;
  const smallRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[!@#$%^&*]/;
  var capitalCheck = document.getElementById("capital");
  var smallCheck = document.getElementById("small");
  var numberCheck = document.getElementById("number");
  var symbolCheck = document.getElementById("symbol");
  var passLengthCheck = document.getElementById("passLength");

  function checkIcon(myElementID) {
    myElementID.firstChild.classList.add("bi-check-square");
    myElementID.firstChild.classList.remove("bi-x-circle");
  }

  function xIcon(myElementID) {
    myElementID.firstChild.classList.add("bi-x-circle");
    myElementID.firstChild.classList.remove("bi-check-square");
  }

  if (newPassword.match(capitalRegex)) {
    capitalCheck.style.color = "#059505";
    checkIcon(capitalCheck);
  } else {
    capitalCheck.style.color = "#212529";
    xIcon(capitalCheck);
  }

  if (newPassword.match(smallRegex)) {
    smallCheck.style.color = "#059505";
    checkIcon(smallCheck);
  } else {
    smallCheck.style.color = "#212529";
    xIcon(smallCheck);
  }

  if (newPassword.match(numberRegex)) {
    numberCheck.style.color = "#059505";
    checkIcon(numberCheck);
  } else {
    numberCheck.style.color = "#212529";
    xIcon(numberCheck);
  }

  if (newPassword.match(symbolRegex)) {
    symbolCheck.style.color = "#059505";
    checkIcon(symbolCheck);
  } else {
    symbolCheck.style.color = "#212529";
    xIcon(symbolCheck);
  }

  if (newPassword.length >= 8) {
    passLengthCheck.style.color = "#059505";
    checkIcon(passLengthCheck);
  } else {
    passLengthCheck.style.color = "#212529";
    xIcon(passLengthCheck);
  }

  // if (!regularExpression.test(newPassword)) {
  //   var reportArea = document.getElementById("report");
  //   reportArea.innerHTML =
  //     "password should contain atleast one number and one special character";
  //   return false;
  // }
}
