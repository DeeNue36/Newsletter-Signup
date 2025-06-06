const emailField = document.getElementById('email');
const submitEmail = document.getElementById('submit-email');
const errorMessage = document.querySelector('.error-message');
const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.modal-message');
const dismissModal = document.querySelector('.close-modal');


submitEmail.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = emailField.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue === '' || !emailRegex.test(emailValue)) {
        emailField.classList.toggle('error-mode');
        errorMessage.textContent = 'Valid email required';
    }
    else {
        emailField.classList.remove('error-mode');
        errorMessage.textContent = '';
    }
    console.log(`Email: ${emailValue}`);
});
