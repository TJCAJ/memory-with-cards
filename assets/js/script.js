// A test of the modal function with rules
//Adding const and evenelisteners to the modal

//Modal const and function

const modal = document.querySelector("#modal")
const openModalButton = document.querySelector("#open-modal-btn")
const closeModalButton = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")

openModalButton.addEventListener("click", () => {
    modal.classList.add("open")
    overlay.classList.add("open")
})

closeModalButton.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.remove("open")
    overlay.classList.remove("open")
}

// Add const and functons for game