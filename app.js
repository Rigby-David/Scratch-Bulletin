import { fetchPosts } from './fetch-utils.js';
import { renderPostList } from './render-utils.js';

// import functions and grab DOM elements
const signInButton = document.getElementById('sign-in');
const createButton = document.getElementById('create');
const postListEl = document.getElementById('post-list');
// let state

// set event listeners 
signInButton.addEventListener('click', () => {
    location.replace('signin-page');
});

createButton.addEventListener('click', () => {
    location.replace('create-page');
});

async function loadData() {
    const data = await fetchPosts();
    console.log(data);
}

loadData();
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
