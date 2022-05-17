// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { posts } from '../posts.js';
import { renderPostList } from '../render-utils';
const test = QUnit.test;

test('renderPostList should display list data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPostList(posts);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
