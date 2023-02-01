// let emailField = document.getElementById("email-field");
// let emailError = document.getElementById("email-error");

// function validateEmail() {
//   if (
//     !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
//   ) {
//     emailError.innerHTML = "errorrrrrrrrrrrrr";
//     return false;
//   } else {
//     alert("bravo");
//   }
// }
function validation() {
  var label = document.getElementById("label");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    label.classList.add("valid");
    label.classList.remove("invalid");
    text.innerHTML = "Your e-mail is valid :)";
    text.style.color = "#00ff00";
    document.getElementById("email").style.borderColor = "#00ff00";
  } else {
    label.classList.remove("valid");
    label.classList.add("invalid");
    text.innerHTML = "Please check your e-mail :(";
    text.style.color = "#ff0000";
    document.getElementById("email").style.borderColor = "#ff0000";
  }
}

function validation2() {
  var label2 = document.getElementById("label2");
  var email2 = document.getElementById("email2").value;
  var text2 = document.getElementById("text2");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email2.match(pattern)) {
    label2.classList.add("valid");
    label2.classList.remove("invalid");
    text2.innerHTML = "Your e-mail is valid :)";
    text2.style.color = "#00ff00";
    document.getElementById("email2").style.borderColor = "#00ff00";
  } else {
    label2.classList.remove("valid");
    label2.classList.add("invalid");
    text2.innerHTML = "Please check your e-mail :(";
    text2.style.color = "#ff0000";
    document.getElementById("email2").style.borderColor = "#ff0000";
  }
}
