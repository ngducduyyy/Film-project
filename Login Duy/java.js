import { isRequired, isValidEmail, isValidPass } from "./validate.js"

const formData = document.getElementById('form-data')
formData.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const pass = document.getElementById('pass').value
    const emailErr = document.getElementById('email-error')
    const passErr = document.getElementById('pass-error')


    emailErr.innerText = ''
    passErr.innerText = ''
    if (!isRequired(email)) {
        emailErr.innerText = "Email không được để trống"

    }
    else {
        if (!isValidEmail(email)) {
            emailErr.innerText = 'Email không hợp lệ'
        }
    }
    if (!isRequired(pass)) {
        passErr.innerText = "Password không được để trống"
    }
    if (!isValidPass(pass)) {
        passErr.innerText = "Password không hợp lệ"
    }
})

