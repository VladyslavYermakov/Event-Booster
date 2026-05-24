export function renderModal(event, modalBody, backdrop) {
  modalBody.innerHTML = `
    <button type="button" id="closeModal" class="close-btn">Х</button>

    <img class="modal-img" src="${event.images?.[0]?.url}" alt="${event.name}" />

    <h2 class="modal-title">INFO</h2>
    <p class="modal-text">${event.description}</p>

    <h2 class="modal-title">WHEN</h2>
    <p class="modal-date">${event.dates?.start?.localDate}</p>
    <p class="modal-date">${event.dates?.start?.localTime}</p>

    <h2 class="modal-title">WHERE</h2>
    <p class="modal-date">${event._embedded?.venues?.[0]?.city?.name}</p>
    <p class="modal-date">${event._embedded?.venues?.[0]?.name}</p>

    <h2 class="modal-title">WHO</h2>
    <p class="modal-date">${event.name}</p>
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
