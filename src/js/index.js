import { renderConcerts, fetchConcerts } from "./api";
import { renderPagination } from "./pagination";
export const API_KEY = "UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71";
export const BASE_URL = "https://app.ticketmaster.com/discovery/v2";
export let totalPages = 0;

export const concertsList = document.querySelector(".concerts");

async function loadConcerts() {
  const concerts = await fetchConcerts();
  totalPages = concerts.page.totalPages;
  renderConcerts(concerts, concertsList);
  renderPagination(totalPages);
}

loadConcerts();
