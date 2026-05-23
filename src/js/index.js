import { fetchConcerts } from "./api/concertsApi.js";

import { renderConcerts } from "./components/concerts.js";

import { renderPagination } from "./components/pagination.js";

// import { openModal } from "./components/modal.js";

const concertsList =
  document.querySelector(".concerts");


export async function loadConcerts(page = 0) {
  const concerts = await fetchConcerts(page);

  renderConcerts(concerts, concertsList);

  renderPagination(page, 30);
}

loadConcerts();

renderPagination(loadConcerts);