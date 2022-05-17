export function renderPostList(post) {
    const div = document.getElementById('div');
    const h3 = document.getElementById('h3');
    const h4 = document.getElementById('h4');
    const p = document.getElementById('p');

    div.classList.add('post-detail');

    h3.textContent = post.title;

    h4.textContent = post.contact;

    p.textContent = post.description;

    div.append(h3, h4, p);
    return div;
}