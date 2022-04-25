function enter() {
    var surnameS = document.getElementById("surname").value;
    var nameS = document.getElementById("name").value;
    var usernameS = document.getElementById("username").value;
    var mobileS = document.getElementById("mobile").value;
    var emailS = document.getElementById("email").value;
    var errors = document.getElementById("errors");
    var incorrect = new String;
    errors.innerHTML = new String;
   
    // Check Surname
    if (surnameS == "") {
        incorrect += "Please supply a Surname! <br>";
    }
    // Check Name
    if (nameS == "") {
        incorrect += "Please supply an Initial name! <br>";
    }
    // Check Username
    if (usernameS == "") {
        incorrect += "Please supply a Username! <br>";
    }
    // Check Mobile
    var mobileRE = /\d{3}-\d{4}-\d{4}$/;
    if (mobileS.match(mobileRE)) {

    } else {
        incorrect += "Please check mobile number! <br>"
    }
    // Check E-mail
    var emailRE = /^.+@.+\..{2,4}$/;
    if (emailS.match(emailRE)) {

    } else {
        incorrect += "Please check email! <br>"
    }

    // Check errors
    if (incorrect == "") {
        errors.innerHTML += "Processing data, You may click on Log In"
    } else {
        errors.innerHTML += incorrect
    }
}




/*-------------- For Login Details ------------*/
function entering() {
    var usernameS = document.getElementById("username").value;
    var errors = document.getElementById("errors");
    var incorrect = new String;
    errors.innerHTML = new String;
    
    // Check Username
    if (usernameS == "") {
        incorrect += "Please supply a Username! <br>";
    }

    // Check errors
    if (incorrect == "") {
        errors.innerHTML += "Processing data, You may click on Log In"
    } else {
        errors.innerHTML += incorrect
    }
}