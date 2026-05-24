import { searchConcerts } from ".././api/concertsApi.js";
import { renderConcerts } from "./concerts.js";

const searchInput = document.querySelector(".event-search");
const countrySelect = document.querySelector(".countries");
const searchBtn = document.querySelector(".event-search-btn");
const concertsList = document.querySelector(".concerts");

async function handleSearch() {
    const keyword = searchInput.value.trim();
    const country = countrySelect.value;

    const concerts = await searchConcerts(keyword, country);

  if (!concerts?._embedded?.events) {
    concertsList.innerHTML = "<p>No concerts found</p>";
    return;
  }

    renderConcerts(concerts, concertsList);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleSearch();
});

countrySelect.addEventListener("change", handleSearch);