const submit = document.getElementById('login');
const loginError = document.querySelector('.login-message-error');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == "cesar@alura.com"){
        if(password.value == "cesar123"){
            window.location.href = './admin-productos.html'
        } else {
            loginError.classList.add('invalid-login')
        }
    } else {
        loginError.classList.add('invalid-login')
    }
})



