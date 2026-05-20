const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".modal-close");

function openModal() {
  backdrop.classList.remove("is-hidden");
}

function closeModal() {
  backdrop.classList.add("is-hidden");
}

closeBtn.addEventListener("click", function () {
  closeModal();
});

backdrop.addEventListener("click", function (event) {
  if (event.target == backdrop) {
    closeModal();
  }
});

openModal();
