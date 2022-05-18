export function renderPostList(post) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const h4 = document.createElement('h4');

    div.classList.add('post-detail');
    
    h3.textContent = post.title;

    p.textContent = post.description;

    h4.textContent = post.contact;

    div.append(h3, p, h4);
    return div;
}
