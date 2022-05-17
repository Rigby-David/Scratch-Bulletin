import { getPost } from './fetch-utils.js';
// import functions and grab DOM elements
const signInButton = document.getElementById('sign-in');
const createButton = document.getElementById('create');
// let state

// set event listeners 
signInButton.addEventListener('click', () => {
    location.replace('signin-page');
});

createButton.addEventListener('click', () => {
    location.replace('create-page');
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
