import { loadConcerts } from "./index";
const pagination = document.querySelector(".pagination-container");
export function renderPagination() {
  let markup = "";
  for (let i = 0; i < 30; i++) {
    markup += `    <button type="button" 
     class="pagination-btn" data-page="${i}">${i + 1}</button>`;
  }
  pagination.innerHTML = markup;
}
pagination.addEventListener("click", (event) => {
  if (!event.target.classList.contains("pagination-btn")) return;
  const page = Number(event.target.dataset.page);
  loadConcerts(page);
});
