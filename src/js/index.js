import { fetchConcerts, fetchByID } from "./api/concertsApi.js";

import { renderConcerts } from "./components/concerts.js";
import { renderModal } from "./components/modal.js";

import { renderPagination } from "./components/pagination.js";

//import { openModal } from "./components/modal.js";

const concertsList = document.querySelector(".concerts");
const modalBody = document.querySelector(".modalBody");

let currentPage = 0;

export async function loadConcerts(page = 0) {
  const concerts = await fetchConcerts(page);

  renderConcerts(concerts, concertsList);

  renderPagination(page, 30);
}

loadConcerts();

renderPagination(loadConcerts);

//fetchByID("17AYv0G65p_a4Yw");

concertsList.addEventListener("click", (event) => {
  const item = event.target.closest(".concert-item");
  if (!item) {
    return;
  }
  const id = item.dataset.id;
  const data = fetchByID(id);
  console.log(data._embedded.events);
  renderModal(data._embedded.events, event, modalBody, backdrop);
});
