import { loadConcerts } from "../index";

const pagination = document.querySelector(".pagination-container");

export function renderPagination(currentPage = 0, totalPages = 30) {
  let pages = [];
  const groupSize = 5;

  const start = Math.floor(currentPage / groupSize) * groupSize;
  const end = Math.min(start + groupSize, totalPages);

  if (start > 0) {
    pages.push(0);

    if (start > 1) {
      pages.push({
        type: "prevDots",
        page: start - groupSize,
      });
    }
  }

  for (let i = start; i < end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push({
      type: "nextDots",
      page: end,
    });

    pages.push(totalPages - 1);
  }

  pagination.innerHTML = pages
    .map((page) => {
      if (typeof page === "object") {
        return `
          <button
            class="pagination-btn dots-btn"
            data-page="${page.page}"
          >
            ...
          </button>
        `;
      }

      return `
      <button
        class="pagination-btn ${page === currentPage ? "active" : ""}"
        data-page="${page}"
      >
        ${page + 1}
      </button>
      `;
    })
    .join("");
}

pagination.addEventListener("click", (e) => {
  const btn = e.target.closest(".pagination-btn");

  if (!btn) return;

  const page = Number(btn.dataset.page);

  loadConcerts(page);
});
