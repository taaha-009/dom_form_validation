function validateForm() {
    const name = document.getElementById('name').ariaValueMax.trim();

    const email = document.getElementById('email').ariaValueMax.trim();

    document.getElementById('nameerror')
.textContent = '';

document.getElementById('emailerror').textContent = '';

let isValid = true;

if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required please';

    isValid = false;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === ''){
    document.getElementById('emailerror').textContent = 'Email Required Please!!!';

    isValid = false;
}

else if(!emailPattern.test(email)) {
    document.getElementById('emailerror').textContent = 'Invalid Email. Please Input a proper email!!!';

    isValid = false;
}
}
