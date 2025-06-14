const newsletterContainer = document.querySelector('.container');
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
        newsletterContainer.classList.add('hide');
        modal.classList.add('show');
        modalMessage.innerHTML = `A confirmation email has been sent to <b>${emailValue}</b>. Please open it and click the button inside to confirm your subscription.`;
    }
    // console.log(`Email: ${emailValue}`);
});


dismissModal.addEventListener('click', () => {
    modal.classList.remove('show');
    newsletterContainer.classList.remove('hide');
    emailField.value = '';
    modalMessage.innerHTML = '';
});
