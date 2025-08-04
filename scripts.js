// script.js - Homepage Script
// pulls posts from localStorage & shows them as cards
// made it real simple, like something you'd write yourself

document.addEventListener("DOMContentLoaded", () => {
  const postList = document.getElementById("post-list");

  let posts = JSON.parse(localStorage.getItem("demarPosts")) || [];

  if (posts.length === 0) {
    postList.innerHTML = `<p style="text-align:center;">No posts yet, fam. Click the button above to drop your first one.</p>`;
    return;
  }

  posts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("post-card");

    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content}</p>
      <a href="post.html?id=${post.id}">Read More</a>
    `;

    postList.appendChild(card);
  });
});
