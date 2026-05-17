import { fetchConcerts } from "./api";
import { page, loadConcerts } from "./index";
const pagination = document.querySelector(".pagination-container");
export function renderPagination(totalPages) {
  let markup = "";
  for (let i = 0; i < totalPages; i++) {
    markup += `    <button type="button" 
     class="pagination-btn" data-page="${i}">${i + 1}</button>`;
  }
  pagination.innerHTML = markup;
}
pagination.addEventListener("click", (event) => {
  if (!event.target.classList.contains("pagination-btn")) return;
  const page = Number(event.target.dataset.page);
  console.log(page)
  loadConcerts(page);
});
