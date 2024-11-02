// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
});

// Handle form submission
document.getElementById("comment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    
    if (name && comment) {
        addComment(name, comment);
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    }
});

// Function to add a new comment
function addComment(name, comment) {
    const postSection = document.querySelector(".forum-posts");
    const newPost = document.createElement("div");
    
    newPost.className = "post";
    newPost.setAttribute("data-aos", "fade-up");
    
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://via.placeholder.com/50" alt="User Avatar" class="avatar">
            <div class="post-info">
                <h3>${name}</h3>
                <span class="timestamp">Just now</span>
            </div>
        </div>
        <div class="post-body">
            <p>${comment}</p>
        </div>
        <div class="post-footer">
            <button class="btn btn-like">❤ 0</button>
            <button class="btn btn-comment">0</button>
        </div>
    `;
    
    postSection.insertBefore(newPost, postSection.firstChild);
    AOS.refresh(); // Refresh AOS to animate the new comment
}

// Like button functionality
document.querySelector(".forum-posts").addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-like")) {
        const likeCount = parseInt(e.target.textContent.split(" ")[1]);
        e.target.textContent = `❤ ${likeCount + 1}`;
    }
});
