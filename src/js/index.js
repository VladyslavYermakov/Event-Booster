import { fetchConcerts, fetchByID } from "./api/concertsApi.js";

import { renderConcerts } from "./components/concerts.js";

import { renderPagination } from "./components/pagination.js";

// import { openModal } from "./components/modal.js";

const concertsList = document.querySelector(".concerts");

let currentPage = 0;

export async function loadConcerts(page = 0) {
  const concerts = await fetchConcerts(page);

  currentPage = concerts.page.number;

  renderConcerts(concerts, concertsList);
}

loadConcerts();

renderPagination(loadConcerts);

//fetchByID("17AYv0G65p_a4Yw");

concertsList.addEventListener("click", (event) => {
  const item = event.target.closest("concert-item");
  if (!item) {
    return;
  }
  const id = item.dataset.id;
  console.log(event.target);
});
