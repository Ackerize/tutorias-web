const iconEye = document.querySelector('.control-input > i');
const form = document.querySelector('.form');
const userInput = document.querySelector('#username-for');
const passInput = document.querySelector('#password-for');
const button = document.querySelector('.btn-container > button');

iconEye.addEventListener('click', () => {
    if (iconEye.classList.contains('fa-eye')) {
        iconEye.classList.remove('fa-eye');
        iconEye.classList.add('fa-eye-slash');
        passInput.type = 'text';
    } else {
        iconEye.classList.remove('fa-eye-slash');
        iconEye.classList.add('fa-eye');
        passInput.type = 'password';
    }
    passInput.focus();
});

const validate = () => {
    if(userInput.value.length > 0 && passInput.value.length > 0) {
        button.disabled = false;
    }else {
        button.disabled = true;
    }
}

userInput.addEventListener('keyup', validate);
passInput.addEventListener('keyup', validate);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = userInput.value;
    const password = passInput.value;

    const data = {
        email,
        password
    };

    const url = 'https://reqres.in/api/register';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.error) {
            alert(data.error);
        }else {
            alert('Welcome');
        }
    })
})