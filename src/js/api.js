import { BASE_URL, API_KEY, page, concertList } from "./index.js"
export function renderConcerts(concerts, concertList) {
    concertList.innerHTML = "";

    concerts.forEach(concert => {
        const item = document.createElement("li");

        const image = concert.images[0]?.url;
        const name = concert.name;
        const date = concert.dates.start.localDate;
        const place = concert._embedded?.venues[0]?.name || "Unknown";

        item.innerHTML = `
            <img class="concert-image" src="${image}" alt="${name}" width="250px">
            <h3 class="concert-title">${name}</h3>
            <p class="concert-date">${date}</p>
            <p class="concert-place">${place}</p>
        `;

        concertList.append(item);
    });
}
export async function fetchConcerts(page = 1) {
    try {
        const response = await fetch(
            `${BASE_URL}/events.json?apikey=${API_KEY}&page=${page}&size=20`
        );

        const data = await response.json();

        return data._embedded.events;
    } catch (err) {
        console.log(err);
    }
}