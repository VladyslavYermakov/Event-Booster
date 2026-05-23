import { loadConcerts } from "../index";

const pagination = document.querySelector(".pagination-container");

export function renderPagination(currentPage = 0, totalPages = 30) {
  let pages = [];


  const start = Math.floor(currentPage / 5) * 5;
  const end = Math.min(start + 5, totalPages);

  for (let i = start; i < end; i++) {
    pages.push(i);
  }

  if (end < totalPages) {
    pages.push("...");
    pages.push(totalPages - 1);
  }

  pagination.innerHTML = pages
    .map((page) =>
      page === "..."
        ? `<span class="dots">...</span>`
        : `
          <button
            class="pagination-btn ${page === currentPage ? "active" : ""}"
            data-page="${page}"
          >
            ${page + 1}
          </button>
        `,
    )
    .join("");
}

pagination.addEventListener("click", (e) => {
  if (!e.target.classList.contains("pagination-btn")) return;

  const page = Number(e.target.dataset.page);

  loadConcerts(page);

  renderPagination(page);
});
