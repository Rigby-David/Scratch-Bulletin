import { signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('/');
    }
});