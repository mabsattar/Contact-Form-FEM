const firstNameCheck = document.getElementById('fname')
const lastNameCheck = document.getElementById('lname')
const emailCheck = document.getElementById('mail')

if (!firstNameCheck || !lastNameCheck || !emailCheck) {
    showError("Please fill out all the required fields")
    return false;
}