HTML Elements I'll need 
-- Bulletin Page
  - Sign up button
  - Sign in Button
  - Create note button
  - Log out button
  - Section/div to render divs of post its to the parent div

-- Sign in/ Sign up page
- main sections housing both sign in and sign up divs
- sign up div
- form
- h2 sign up
- label for input
- email input
- password input
- submit button

REPEAT for sign in div

-- Create a note page
- parent div
 - container div
  - label and title input
  - label and description input
  - label and contact input
  - save button

STATE to track
- email/password
- note page title, description, and contact

# From Scratch Bulletin Board Plan

## 1. Database Setup

-   [x] Add a new table called `posts`
-   [x] Add three columns (title, description, contact) plus any others you want to include. Can all be varchars.
-   [x] Copy your key / url into your fetch-utils and add your client code

```js
const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
```

-   [x] Add some rows for testing -[ ] Enable row level security

## 2. Posts Page

-   [ ] TDD a render function for displaying your post information
-   [ ] Add your `fetchPosts` to `fetch-utils.js`
-   [ ] Add your policy for selecting data (allow all users)

```js
export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}
```

_Validation step: console.log your results to make sure you're getting the data back from the database_

-   [ ] Add an async `loadData` function that you will call immediately to load the data, loop through and render each item on the page

## 3. Auth page

_don't worry about redirects at first_

-   Add your sign in form
-   Add your signInUser function to `fetchUtils`
-   Add event listener to form submit
-   Call function and ensure you get a user back from supabase
    _repeat for sign up_
-   Add your redirects

## 4. Create Page

-   [ ] Add your `create` folder, index.html, and create.js
-   [ ] Add a form for posts in your index.html
-   [ ] Add form event listener, use FormData to get your data from your form
        _Validation step: console.log your FormData to make sure you're getting the info correctly_
-   [ ] Add `createPost` to your `fetch-utils.js`

```js
export async function createNewPost(post) {
    const response = await client.from('posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}
```

-   [ ] Call your create function on form submit
        _Validation step: Confirm new data being added to table in Supabase_
-   [ ] Add in our redirects

    -   If not logged in, redirect to auth page
    -   Redirect to home after succesful insert

    ## 5.Add your home page header with links
