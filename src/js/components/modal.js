export function renderModal(event, modalBody, backdrop) {
  modalBody.innerHTML = `
<button type="button" id="closeModal" class="close-btn">Х</button>

    <img
      class="modal-img"
      src="${event.images?.[0]?.url}"
      alt="${event.name}"
    />

    <div class="modal-content">
      <img
        class="modal-poster"
        src="${event.images?.[0]?.url}"
        alt="${event.name}"
      />

      <div class="modal-info">
        <h2 class="modal-title">INFO</h2>
        <p class="modal-text">
          ${event.info || event.description || "No information available"}
        </p>

        <h2 class="modal-title">WHEN</h2>
        <p class="modal-date">${event.dates?.start?.localDate || ""}</p>
        <p class="modal-date">${event.dates?.start?.localTime || ""}</p>

        <h2 class="modal-title">WHERE</h2>
        <p class="modal-date">
          ${event._embedded?.venues?.[0]?.city?.name || ""}
        </p>
        <p class="modal-date">
          ${event._embedded?.venues?.[0]?.name || ""}
        </p>

        <h2 class="modal-title">WHO</h2>
        <p class="modal-date">${event.name}</p>

        <h2 class="modal-title">PRICES</h2>

        <div class="price-box">
          <span class="price-icon">|||</span>
          <p class="price-text">Standard ${event.price} UAH</p>
        </div>

        <button class="ticket-btn">
          BUY TICKETS
        </button>

        <div class="price-box">
          <span class="price-icon">|||</span>
          <p class="price-text">VIP ${event.price} UAH</p>
        </div>

        <button class="ticket-btn">
          BUY TICKETS
        </button>
      </div>
    </div>

    <button class="more-btn">
      MORE FROM THIS AUTHOR
    </button>
  `;

  const btnClose = document.querySelector("#closeModal");

  btnClose.addEventListener("click", function () {
    backdrop.classList.add("hidden");
  });

  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) {
      backdrop.classList.add("hidden");
    }
  });
}
