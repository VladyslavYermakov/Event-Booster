import { searchConcerts } from "../api/concertsApi.js";
import { renderConcerts } from "./concerts.js";

const searchInput = document.querySelector(".event-search");
const countrySelect = document.querySelector(".countries");
const searchBtn = document.querySelector(".event-search-btn");
const concertsList = document.querySelector(".concerts");