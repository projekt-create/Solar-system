// Selecting input fields and buttons
const Wrapper = document.querySelector('#wrapper');
const RegisterBoxButton = document.querySelector('#registar__box');
const LoginBoxButton = document.querySelector('#login__box');
const UserNameInput = document.querySelector('#username');
const PasswordInput = document.querySelector('#password');
const PasswordRepeatInput = document.querySelector('#password__repeat');
const EmailInput = document.querySelector('#email');
const LoginButton = document.querySelector('#login');
const RegisterButton = document.querySelector('#register');
const ClearRegisterButton = document.querySelector('#clear__register');
const ClearLoginButton = document.querySelector('#clear__login');
const CancelRegisterButton = document.querySelector('#cancel__register');
const CancelLoginButton = document.querySelector('#cancel__login');
const RegisterForm = document.querySelectorAll('#registar__form');
const LoginForm = document.querySelectorAll('#login__form');
const UserNameLoginInput = document.querySelector('#username__login');
const PasswordLoginInput = document.querySelector('#password__login');
const GenderBox = document.querySelector('#gender__box');
const GenderTitle = document.querySelector('#gender__title');
const MaleButton = document.querySelector('#checked__male');
const FemaleButton = document.querySelector('#checked__female');
const Planet = document.querySelectorAll('#planet');
const Body = document.querySelector('body');
const Age = document.querySelector('#age');
const Profile = document.querySelector('#profile');
const Info = document.querySelector('#info');
const ProfileName = document.querySelector('#name__text');
const ProfileEmail = document.querySelector('#email__text');
const ProfileGender = document.querySelector('#gender__text');
const ProfileAge = document.querySelector('#age__text');


// Variables

let usernameValue = '';
let passwordValue = '';



// Function to clear input fields
RegisterBoxButton.addEventListener('click', () => {
    RegisterForm.forEach(form => form.style.display = 'flex');
    LoginForm.forEach(form => form.style.display = 'none');
    RegisterBoxButton.style.display = 'none';
    LoginBoxButton.style.display = 'none';
});

LoginBoxButton.addEventListener('click', () => {
    LoginForm.forEach(form => form.style.display = 'flex');
    RegisterForm.forEach(form => form.style.display = 'none');
    RegisterBoxButton.style.display = 'none';
    LoginBoxButton.style.display = 'none';
});

CancelRegisterButton.addEventListener('click', () => {
    RegisterForm.forEach(form => form.style.display = 'none');
    RegisterBoxButton.style.display = 'block';
    LoginBoxButton.style.display = 'block';
});

CancelLoginButton.addEventListener('click', () => {
    LoginForm.forEach(form => form.style.display = 'none');
    RegisterBoxButton.style.display = 'block';
    LoginBoxButton.style.display = 'block';
});

ClearRegisterButton.addEventListener('click', () => {
    UserNameInput.value = '';
    PasswordInput.value = '';
    PasswordRepeatInput.value = '';
    EmailInput.value = '';
});

ClearLoginButton.addEventListener('click', () => {
    UserNameInput.value = '';
    PasswordInput.value = '';
});


UserNameInput.addEventListener('input', (e) => {
    e.preventDefault();
    let username = UserNameInput.value.trim().toUpperCase();
    if (username.length > 0) {
        usernamelength = username.length;
        for (let i = 0; i < usernamelength; i++) {
            for (let j = 0; j < usernamelength; j++) {
                usernameValue = UserNameInput.value.trim();
                if (username[i] === username[j] && i !== j) {
                    UserNameInput.value = UserNameInput.value.slice(0, i) + UserNameInput.value.slice(i + 1);
                    i--;
                    usernamelength--;
                }
            }
        }
    }
});

UserNameLoginInput.addEventListener('input', (e) => {
    e.preventDefault();
    let username = UserNameLoginInput.value.trim().toUpperCase();
    if (username.length > 0) {
        usernamelength = username.length;
        for (let i = 0; i < usernamelength; i++) {
            for (let j = 0; j < usernamelength; j++) {
                if (username[i] === username[j] && i !== j) {
                    UserNameLoginInput.value = UserNameLoginInput.value.slice(0, i) + UserNameLoginInput.value.slice(i + 1);
                    i--;
                    usernamelength--;
                }
            }
        }
    }
});

GenderTitle.addEventListener('click', (e) => {
    e.preventDefault();
    GenderBox.style.display = 'flex';
});

MaleButton.addEventListener('click', (e) => {
    e.preventDefault();
    GenderTitle.innerHTML = 'Male';
    GenderBox.style.display = 'none';
});

FemaleButton.addEventListener('click', (e) => {
    e.preventDefault();
    GenderTitle.innerHTML = 'Female';
    GenderBox.style.display = 'none';
});

RegisterButton.addEventListener('click', (e) => {
    e.preventDefault();
    let boll = '';
    if (PasswordInput.value === PasswordRepeatInput.value) {
        passwordValue = PasswordInput.value.trim();
        if (EmailInput.value.includes('@gmail.com') || EmailInput.value.includes('@yahoo.com') || EmailInput.value.includes('@hotmail.com') || EmailInput.value.includes('@outlook.com')) {
            if (Age.value >= 18 && Age.value <= 100) {
                if (GenderTitle.innerHTML === 'Male' || GenderTitle.innerHTML === 'Female'){
                    UserNameInput.style.border = '1px solid green';
                    PasswordInput.style.border = '1px solid green';
                    PasswordRepeatInput.style.border = '1px solid green';
                    EmailInput.style.border = '1px solid green';
                    GenderTitle.style.border = '1px solid green';
                    Age.style.border = '1px solid green';
                    boll = 'true';
                }
                else {
                    GenderBox.style.border = '1px solid red';
                }
            }
            else {
                GenderBox.style.border = '1px solid red';
            }
        }
        else {
            EmailInput.style.border = '1px solid red';
        }
    } else {
        PasswordRepeatInput.style.border = '1px solid red';
    }
    if (boll === 'true') {
        Wrapper.style.display = 'none';
        Planet.forEach(planet => planet.style.display = 'block');
        Body.style.overflow = "hidden";
    }
});

LoginButton.addEventListener('click', (e) => {
    e.preventDefault();
    let boll = '';
    if (UserNameLoginInput.value === usernameValue && PasswordLoginInput.value === passwordValue) {
        UserNameLoginInput.style.border = '1px solid green';
        PasswordLoginInput.style.border = '1px solid green';
        boll = 'true';
        UserNameLoginInput.value = '';
        PasswordLoginInput.value = '';
    }
    else {
        UserNameLoginInput.style.border = '1px solid red';
        PasswordLoginInput.style.border = '1px solid red';
    }
    if (boll === 'true') {
        Wrapper.style.display = 'none';
        Planet.forEach(planet => planet.style.display = 'flex');
        Body.style.overflow = "hidden";
    }
});

Profile.addEventListener('click', (e) => {
    e.preventDefault();

    Info.style.display = 'flex';

    ProfileName.innerHTML =  `Name: ${usernameValue}`;
    ProfileEmail.innerHTML = `Email: ${EmailInput.value}`;
    ProfileGender.innerHTML = `Gender: ${GenderTitle.innerHTML}`;
    ProfileAge.innerHTML = `Age: ${Age.value}`;
});

Info.addEventListener('click', (e) => {
    e.preventDefault();
    Info.style.display = 'none';
});




