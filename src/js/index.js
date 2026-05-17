import { renderConcerts, fetchConcerts } from "./api";
import { renderPagination } from "./pagination";
export const API_KEY = "UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71";
export const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

let currentPage = 0;
export const concertsList = document.querySelector(".concerts");

export async function loadConcerts(page = 0) {
  const concerts = await fetchConcerts(page);

  currentPage = concerts.page.number;
  renderConcerts(concerts, concertsList);
  renderPagination();
}

loadConcerts();
