const modal = document.getElementById("about_modal");
const modalBtn = document.getElementById("about_modal_open_button");
const closeBtn = document.querySelector(".close");

modalBtn.addEventListener("click", () => {
    modal.classList.add("show");
    modal.classList.remove("hidden");
    modalBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    modalBtn.classList.remove("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        modal.classList.add("hidden");
        modalBtn.classList.remove("hidden");
    }
});
