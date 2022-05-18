import { fetchPosts, logout } from './fetch-utils.js';
import { renderPostList } from './render-utils.js';

// import functions and grab DOM elements
const signInButton = document.getElementById('sign-in');
const createButton = document.getElementById('create');
const bulletinBoard = document.getElementById('bulletin-board');
const logoutButton = document.getElementById('logout-button');
// let state

// set event listeners 
signInButton.addEventListener('click', () => {
    location.replace('signin-page');
});

createButton.addEventListener('click', () => {
    location.replace('create-page');
});

logoutButton.addEventListener('click', async () => {
    await logout();
});

async function loadData() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPostList(post);
        bulletinBoard.append(postDiv);
    }
}

loadData();
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
