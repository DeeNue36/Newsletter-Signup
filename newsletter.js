const emailField = document.getElementById('email');
const submitEmail = document.getElementById('submit-email');


submitEmail.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = emailField.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!emailRegex.test(emailValue)) {
    //     alert("Please enter a valid email address.");
    //     return;
    // }
    if (emailValue === '') {
        emailField.classList.toggle('error-mode');
    }
    console.log(`Email: ${emailValue}`);
});
