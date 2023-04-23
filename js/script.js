// Adds navbar and footer background transitions
const header = document.querySelector('.navbar');
const footer = document.querySelector('.footer');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
        footer.classList.add('footerBlack');
    }
    else {
        header.classList.remove('navbarDark');
        footer.classList.remove('footerBlack');
    }
}


// Listener to check when "reset" button is pressed
var resetButton = document.querySelector("input[type=reset]");
resetButton.addEventListener("click", clearErrors);

// Function to clear error messages
function clearErrors() {
    document.getElementById('errorname').innerHTML="";
    document.getElementById('erroremail').innerHTML="";
    document.getElementById('errorsubject').innerHTML="";
    document.getElementById('errormsg').innerHTML="";
}

// Function for validating contact info entered by user
function validateContact() {
    var name = document.forms["contactForm"]["name"];
    var email = document.forms["contactForm"]["email"];
    var subject = document.forms["contactForm"]["subject"];
    var message = document.forms["contactForm"]["message"];

    // For else if down below
    let numCheck = name.value.match(/\d+/g);

    // Checks that name field isn't empty
    if (name.value == "") {
        document.getElementById('errorname').innerHTML="Please enter a valid name";
        name.focus();
        return false;
    }
    // Ensures there are no numbers in the user's name
    else if (numCheck != null) {
        document.getElementById('errorname').innerHTML="Please enter a valid name. Cannot contain numbers.";
        name.focus();
        return false;
    }
    else {
        document.getElementById('errorname').innerHTML="";
    }

    // Checks that email field isn't empty
    if (email.value == "") {
        document.getElementById('erroremail').innerHTML="Please enter a valid email address";
        email.focus();
        return false;
    }
    else {
        document.getElementById('erroremail').innerHTML="";
    }

    // Checks that email field contains the proper characters
    if ( (email.value.indexOf("@", 0) < 0) || (email.value.indexOf(".", 0) < 0)) {
        document.getElementById('erroremail').innerHTML="Please enter a valid email address";
        email.focus();
        return false;
    }

    // Checks that subject field isn't empty
    if (subject.value == "") {
        document.getElementById('errorsubject').innerHTML="Please enter a valid subject";
        subject.focus();
        return false;
    }
    else {
        document.getElementById('errorsubject').innerHTML="";
    }

    // Checks that message field isn't empty
    if (message.value == "") {
        document.getElementById('errormsg').innerHTML="Please enter a valid message";
        message.focus();
        return false;
    }
    else {
        document.getElementById('errormsg').innerHTML="";
    }

    return true;
}
