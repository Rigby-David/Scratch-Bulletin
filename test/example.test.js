// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { posts } from '../posts.js';
import { renderPostList } from '../render-utils.js';
const test = QUnit.test;

test('renderPostList should display list data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post-detail"><h3>Testing</h3><p>Still testing</p><h4>Tester</h4></div>`;
    
    const postList = {
        title: 'Testing',
        description: 'Still testing',
        contact: 'Tester',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPostList(postList);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
