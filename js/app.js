const resultsContainer = document.querySelector(".search-results");
const searchInput = document.querySelector(".search-input");

const topics = Array.from(document.querySelectorAll(".sub-topic")).map(
  (element) =>
    element.textContent.trim().toLocaleLowerCase().replaceAll(" ", "-")
);

searchInput.addEventListener("input", (e) => {
  resultsContainer.innerHTML = "";
  const { value } = e.target;
  if (value) {
    const results = topics.filter((string) => string.includes(value));
    results.forEach((result) => {
      const dt = document.createElement("dt");
      const link = document.createElement("a");
      link.href = `#${result}`;
      link.textContent = result;
      dt.append(link);
      resultsContainer.append(dt);
    });
  }
});
