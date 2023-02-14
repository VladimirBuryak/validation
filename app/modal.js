"use strict"
const btn = document.querySelector(".open-modal"), modal = document.querySelector(".modal")
function openModal() {
   modal.classList.add("open")
   btn.setAttribute("data-open", 1)
   document.querySelectorAll('.input-box').forEach(e => {
      e.classList.remove("error")
      if (e.querySelector("p") !== null) {
         e.querySelector("p").remove();
      }
   })
   document.myForm.reset();
}
function removeModal() {
   modal.classList.remove("open")
   btn.removeAttribute("data-open")
}
// Открыть модальное окно
btn.addEventListener('click', () => {
   if (!btn.hasAttribute("data-open")) {
      openModal()
   }
})

// Закрыть модальное окно
document.querySelector(".material-symbols-outlined").addEventListener('click', () => {
   removeModal()
})

// Закрыть модальное окно при нажатии на Esc
document.addEventListener('keydown', e => {
   if (e.key == "Escape") {
      removeModal()
   }
})

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal-content").addEventListener('click', e => {
   e._isClick = true;
})

document.getElementById("my-modal").addEventListener('click', e => {
   if (e._isClick) return;
   removeModal()
})