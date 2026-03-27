document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("search");
  const items = document.querySelectorAll(".game-btn");
  const noResults = document.getElementById("no-results");

  search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();
    let matchCount = 0;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();

      if (text.includes(value)) {
        item.classList.remove("hidden");
        matchCount++;
      } else {
        item.classList.add("hidden");
      }
    });

    if (matchCount === 0 && value !== "") {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
});