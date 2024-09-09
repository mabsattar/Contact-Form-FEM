const firstNameCheck = document.getElementById('firstname')
const lastNameCheck = document.getElementById('lastname')
const emailCheck = document.getElementById('emailaddress')
const queryCheck = document.querySelector('input[name = "queryType"]')
const messageCheck = document.getElementById('msg')
const checkbox = document.getElementById('input[name = "checkbox"]')

const form = document.querySelector('.contact-form')

const validation = () => {
    const firstName = firstNameCheck.value.trim();
    const lastName = lastNameCheck.value.trim();
    const emailAddress = emailCheck.value.trim();
    const message = messageCheck.value.trim();


    if (!firstName || !lastName || !emailAddress || !message) {
        ShowError("Please fill all the required fields");
        return false
    }

    if (!isValidEmail(emailAddress)) {
        ShowError("Please enter a valid email address.");
        return false;
    }

    else showSuccessMessage("Form submitted successfully!");
    return true;
};


