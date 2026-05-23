export function renderModal(event, modalBody, backdrop) {
     
  modalBody.innerHTML = `
    <button type="button" id="closeModal" class="close-btn">✕</button>

    <img
      class="modal-img"
      src="${event.image}"
      alt="${event.name}"
    />

    <h2 class="modal-title">INFO</h2>

    <p class="modal-text">
      ${event.info}
    </p>

    <h2 class="modal-title">WHEN</h2>

    <p class="modal-date">${event.date}</p>
    <p class="modal-date">${event.time}</p>

    <h2 class="modal-title">WHERE</h2>

    <p class="modal-date">${event.city}</p>
    <p class="modal-date">${event.place}</p>

    <h2 class="modal-title">WHO</h2>

    <p class="modal-date">${event.name}</p>

    <h2 class="modal-title">PRICES</h2>

    <div class="price-box">
      <p class="price">Standard ${event.standardPrice}</p>

      <button class="ticket-btn">
        BUY TICKETS
      </button>
    </div>

    <div class="price-box">
      <p class="price">VIP ${event.vipPrice}</p>

      <button class="ticket-btn">
        BUY TICKETS
      </button>
    </div>

    <button class="author-btn">
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

