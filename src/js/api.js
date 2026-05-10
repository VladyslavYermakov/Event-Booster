export function renderConcerts(concerts, concertList, onClick) {
    concertList.innerHTML = ""
    concerts.forEach(concert => {
        const item = document.createElement("li")
        item.innerHTML = `
            <img src="${concert}" alt="">
            <p>${concert}</p>
            <p>${concert}</p>
            <p>${concert}</p>
        `
    })
}