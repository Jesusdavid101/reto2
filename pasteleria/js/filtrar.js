const searchInput = document.getElementById("search");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    items.forEach(item => {
        const name = item.dataset.name.toLowerCase();
        item.style.display = name.includes(query) ? "block" : "none";
    });
});