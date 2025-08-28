function list_of_items(e) {
    const stores = {
        kids: document.querySelector(".kids-store"),
        accessories: document.querySelector(".accessories-store"),
        "story-books": document.querySelector(".storybooks"),
        toys: document.querySelector(".toys-store")
    };

    // Hide all stores
    Object.values(stores).forEach(store => store.style.display = "none");

    const categoryName = e.currentTarget.dataset.value;

    if(stores[categoryName]) {
        stores[categoryName].style.display = "block";

        const pageMap = {
            kids: "kids.html",
            accessories: "accessories.html",
            "story-books": "story.html",
            toys: "toys.html"
        };

        setTimeout(() => {
            window.location.href = pageMap[categoryName];
        }, 1000);
    }
}

// Attach click events to main menu items
document.querySelectorAll('nav ul > li').forEach(li => {
    li.addEventListener('click', list_of_items);


    document.addEventListener("DOMContentLoaded", () => {
      const profileSpan = document.getElementById("profileName");
      const username = localStorage.getItem("username");

      if (username && username.trim() !== "") {
        profileSpan.textContent = username;  // Show name instead of "Profile"
      } else {
        profileSpan.textContent = "Profile"; // Fallback
      }
    });
});