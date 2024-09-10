const firstNameCheck = document.getElementById('firstname')
const lastNameCheck = document.getElementById('lastname')
const emailCheck = document.getElementById('emailaddress')
const queryCheck = document.querySelectorAll('input[name="queryType"]');
const messageCheck = document.getElementById('msg')
const checkboxCheck = document.querySelector('input[name="checkbox"]');

const form = document.querySelector('.contact-form')


const validation = () => {
    const firstName = firstNameCheck.value.trim();
    const lastName = lastNameCheck.value.trim();
    const emailAddress = emailCheck.value.trim();
    const message = messageCheck.value.trim();
    const query = [...queryCheck].some(radio => radio.checked);
    const checkbox = checkboxCheck.checked;

    clearMessages();


    if (!firstName || !lastName || !emailAddress || !message || !query || !checkbox) {
        showError("Please fill all the required fields");
        return false
    }

    if (!isValidEmail(emailAddress)) {
        showError("Please enter a valid email address.");
        return false;
    }

    showSuccessMessage("Form submitted successfully!");
    return true;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validation()) {
        console.log("Form is valid and can be submitted.")
    }
});


const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}

const showError = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    errorDiv.setAttribute('aria-live', 'assertive');
    form.insertBefore(errorDiv, form.firstChild);

    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
};

const showSuccessMessage = (message) => {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.setAttribute('role', 'alert');
    successDiv.setAttribute('aria-live', 'assertive');
    form.insertBefore(successDiv, form.firstChild);
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
};

const clearMessages = () => {
    const messages = document.querySelectorAll('.error-message, .success-message');
    messages.forEach((msg) => msg.remove());
};




