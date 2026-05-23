import { fetchConcerts } from "./api/concertsApi.js";

import { renderConcerts } from "./components/concerts.js";

import { renderPagination } from "./components/pagination.js";

// import { openModal } from "./components/modal.js";

const concertsList =
  document.querySelector(".concerts");

let currentPage = 0;

export async function loadConcerts(page = 0) {
    const concerts = await fetchConcerts(page);

    currentPage = concerts.page.number;

    renderConcerts(concerts, concertsList);
}

loadConcerts();

renderPagination(loadConcerts);