let _init = [];
window.onload = function () {
    for ( var i in _init ) {
        if ( typeof( _init[i] ) == 'function' ) _init[i]();
    }
}

let authField = document.querySelectorAll('.form-field'),
    forEach = Array.prototype.forEach,
    formInputs = document.querySelectorAll('.form-input'),
    passwordInputs = document.querySelectorAll('.input-password'),
    navigationItems = document.querySelectorAll('.authorization-navigation-item'),
    welcome = document.getElementById('welcome'),
    join = document.getElementById('join'),
    signIn = document.getElementById('signin'),
    signUp = document.getElementById('signup');

let signinLogin = document.forms['signin-form']['signin-login'],
    signinPassword = document.forms['signin-form']['signin-password'],
    signupLogin = document.forms['signup-form']['signup-login'],
    signupEmail = document.forms['signup-form']['signup-email'],
    signupPassword = document.forms['signup-form']['signup-password'],
    signupPasswordRepear = document.forms['signup-form']['signup-password-repeat'];

let buttonPasswordShow = document.querySelectorAll('.form-password-show'),
    buttonPasswordHide = document.querySelectorAll('.form-password-hide');

// Навигация
// Проходимся циклом по всем кнопкам и сначала удаляем класс у всех кнопок, а потом добавляем текущей
forEach.call(navigationItems, (_this) => {
    _this.addEventListener('click', () => {
        for (let navigationItem of navigationItems) {
            navigationItem.classList.remove('active');
        }
        _this.classList.add('active');

        if (_this.getAttribute('name') === 'registration') {
            welcome.style.display = 'none';
            join.style.display = 'block';
            signUp.classList.add('active');
            document.getElementById('authorization').classList.add('registration');
            signIn.classList.remove('active');

            signupLogin.focus();

            signinLogin.value = '';
            signinPassword.value = '';

            signupLogin.value = '';
            signupEmail.value = '';
            signupPassword.value = '';
            signupPasswordRepear.value = '';

            document.title = 'Регистрация - Planner';

            for (let hide of buttonPasswordHide) {

            }

            for (let show of buttonPasswordShow) {
                for (let hide of buttonPasswordHide) {
                    for(let passwordInput of passwordInputs) {
                        passwordInput.setAttribute('type', 'password');
                    }
                    show.classList.add('active');
                    hide.classList.remove('active');
                }
            }

        } else {
            welcome.style.display = 'block';
            join.style.display = 'none';
            signIn.classList.add('active');
            document.getElementById('authorization').classList.remove('registration');
            signUp.classList.remove('active');
            signinLogin.focus();

            signinLogin.value = '';
            signinPassword.value = '';

            signupLogin.value = '';
            signupEmail.value = '';
            signupPassword.value = '';
            signupPasswordRepear.value = '';

            document.title = 'Авторизация - Planner';

            for (let show of buttonPasswordShow) {
                for (let hide of buttonPasswordHide) {
                    for(let passwordInput of passwordInputs) {
                        passwordInput.setAttribute('type', 'password');
                    }
                    show.classList.add('active');
                    hide.classList.remove('active');
                }
            }
        }
    });
})

// Фокусировка инпутов формы
forEach.call(authField, function (_this) {
    this.addEventListener('focusin', ClassAdd(_this, true));
    this.addEventListener('focusout', ClassAdd(_this, false));
});

// Функция для обработок действий
function ClassAdd (_this, _true) {
    let event;
    _true === true ? event = 'focusin' : event = 'focusout';
    _this.addEventListener(`${event}`, function () {
        let inputs = this.getElementsByTagName('input');
        for (let input of inputs) {
            if(event === 'focusin') {
                input.classList.add('focus');
            } else {
                input.classList.remove('focus');
            }
        }
    });
}


//======================
// Валидация регистрации
//======================
formInputs.forEach( elem => {
    elem.addEventListener('input', () => {
        if(signupLogin.value.length >= 1 &&
            signupEmail.value.length >= 1 &&
            signupPassword.value.length >= 1 &&
            signupPasswordRepear.value.length >= 1) {
            document.getElementById('signup-submit').classList.add('active');
            document.getElementById('signup-submit').removeAttribute('disabled');
        } else {
            document.getElementById('signup-submit').classList.remove('active');
            document.getElementById('signup-submit').setAttribute('disabled', '');
        }

        if(signinLogin.value.length >= 1 && signinPassword.value.length >= 1) {
            document.getElementById('signin-submit').classList.add('active');
            document.getElementById('signin-submit').removeAttribute('disabled');
        } else {
            document.getElementById('signin-submit').classList.remove('active');
            document.getElementById('signin-submit').setAttribute('disabled', '');
        }

    });
})

// Кнопка "Показать пароль"
// Если произошел клик по иконке - показать пароль
for (let show of buttonPasswordShow) {
    for (let hide of buttonPasswordHide) {

        show.addEventListener('click', () => {
            for(let passwordInput of passwordInputs) {
                passwordInput.setAttribute('type', 'text');
            }
            show.classList.remove('active');
            hide.classList.add('active');
        });

        hide.addEventListener('click', () => {
            for(let passwordInput of passwordInputs) {
                passwordInput.setAttribute('type', 'password');
            }
            show.classList.add('active');
            hide.classList.remove('active');
        });
    }
}

