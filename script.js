function composePostElement(post) {
  var el = document.createElement("div");
  el.classList.add("post");
  el.innerHTML = `
        <h3>${post.id}</h3>
        <p>${post.title}</p>
    `;

  return el;
}

function renderPosts(posts) {
  var postsContainer = document.getElementById("posts");

  posts.forEach((post) => {
    var postElement = composePostElement(post);
    postsContainer.appendChild(postElement);
  });
}

function getPosts() {
  var postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      renderPosts(posts);
    });
}

window.addEventListener("load", getPosts);
