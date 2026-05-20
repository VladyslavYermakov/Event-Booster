export function renderConcerts(concerts, concertList) {
    concertList.innerHTML = "";

    const events = concerts._embedded.events;

    events.forEach(concert => {
        const item = document.createElement("li");

        const image = concert.images[0]?.url;
        const name = concert.name;
        const date = concert.dates.start.localDate;
        const place =
        concert._embedded?.venues[0]?.name || "Unknown";

        item.innerHTML = `
        <img class="concert-image" src="${image}" alt="${name}" width="250px">
        <h3 class="concert-title">${name}</h3>
        <p class="concert-date">${date}</p>
        <p class="concert-place">${place}</p>
        `;

        concertList.append(item);
    });
}