const checkLoginFields = document.querySelectorAll('.login-field')
const checkRegisterFields = document.querySelectorAll('.register-field')
const loginLink = document.getElementById('login-link')
const registrationLink = document.getElementById('register-link')
const loginFields = {
    userEmail: document.getElementById('login-email'),
    userPassword: document.getElementById('login-password')
}
const registerFields = {
    userName: document.getElementById('full-name'),
    userEmail: document.getElementById('register-email'),
    userPassword: document.getElementById('register-password')
}

checkLoginFields.forEach(element => {
    element.addEventListener("blur", function () {
        validateLoginField(element)
    })
})

checkRegisterFields.forEach(element => {
    element.addEventListener("blur", function () {
        validateRegisterField(element)
    })
})

registrationLink.addEventListener('click', function () {
    document.getElementById('login').style.display = 'none'
    document.getElementById('registration').style.display = 'block'
})

loginLink.addEventListener('click', function () {
    document.getElementById('registration').style.display = 'none'
    document.getElementById('login').style.display = 'block'
})

function validateLoginField(field) {
    let errorMessage = field.parentElement.querySelector('.login-error');

    if (field === loginFields.userEmail) {
        if (!field.value.includes('@')) {
            errorMessage.innerText = 'Invalid email address'
            addErrorStyle(field)
        } else {
            errorMessage.innerText = ''
            removeErrorStyle(field)
        }
    }

    if (field === loginFields.userPassword) {
        if (field.value.length < 6) {
            errorMessage.innerText = 'Must be at least 6 characters long'
            addErrorStyle(field)
        } else {
            errorMessage.innerText = ''
            removeErrorStyle(field)
        }
    }

    if (loginFields.userPassword.value.length >= 6 && loginFields.userEmail.value.includes('@')) {
        enableLoginButton()
    } else {
        disabledLoginButton()
    }
}

function validateRegisterField(field) {
    let errorMessage = field.parentElement.querySelector('.register-error')

    if (field === registerFields.userName) {
        if (field.value.trim() === '') {
            errorMessage.innerText = 'Required field'
            addErrorStyle(field)
        } else {
            errorMessage.innerText = ''
            removeErrorStyle(field)
        }
    }

    if (field === registerFields.userEmail) {
        if (!field.value.includes('@')) {
            errorMessage.innerText = 'Invalid email address'
            addErrorStyle(field)
        } else {
            errorMessage.innerText = ''
            removeErrorStyle(field)
        }
    }

    if (field === registerFields.userPassword) {
        if (field.value.length < 6) {
            errorMessage.innerText = 'Must be at least 6 characters long'
            addErrorStyle(field)
        } else {
            errorMessage.innerText = ''
            removeErrorStyle(field)
        }
    }

    if (registerFields.userPassword.value.length >= 6 && registerFields.userEmail.value.includes('@') && registerFields.userName.value !== '') {
        enableRegisterButton()
    } else {
        disabledRegisterButton()
    }
}

function enableLoginButton() {
    document.getElementById("login-submit").removeAttribute("disabled")
}

function disabledLoginButton() {
    document.getElementById("login-submit").setAttribute("disabled", '')
}

function enableRegisterButton() {
    document.getElementById("register-submit").removeAttribute("disabled")
}

function disabledRegisterButton() {
    document.getElementById("register-submit").setAttribute("disabled", '')
}

function addErrorStyle(field) {
    field.style.borderBottomColor = 'rgb(248, 71, 71)'
}

function removeErrorStyle(field) {
    field.style.borderBottomColor = ''
}