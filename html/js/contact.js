const form = document.getElementById("contact-form");

const firstName = document.getElementById("name");
const nameError = document.getElementById("nameError")

const message = document.getElementById("message");
const messageError = document.getElementById("messageError")

const email = document.getElementById("email");
const emailError = document.getElementById("emailError")

const address = document.getElementById("address");
const addressError = document.getElementById("addressError")

function validateForm() {

    event.preventDefault();

    if (validateLength(firstName.value, 0) ) {
        nameError.style.display = "none";
    }
    else {nameError.style.display = "block"}

    if (validateLength(message.value, 10)) {
        messageError.style.display = "none";
    }
    else {messageError.style.display = "block";}

    if (validateEmail(email)) {
        emailError.style.display = "none";
    }
    else {emailError.style.display = "block";}
   
    if (validateLength(address.value, 25)) {
        addressError.style.display = "none";
    }
    else {addressError.style.display = "block";}
}

function validateLength (value, number) {
    if (value.trim().length > number) {
        return true;
    }
    else { return false; }
}

function validateEmail (email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

form.addEventListener("submit", validateForm);


