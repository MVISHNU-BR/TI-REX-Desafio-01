const emailRegex = new RegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/);
let email = document.getElementById('email');
let password = document.getElementById('password')
const loginForm = document.querySelector('.login-form')

loginForm.onsubmit = (e) => {
    e.preventDefault()

    if (emailRegex.test(email.value)) {
        document.getElementById('error').classList.add('hidden')
        window.location.href = "kanban.html";
    } else {
        document.getElementById('error').classList.remove('hidden')
    }
}
