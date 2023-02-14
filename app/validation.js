"use strict"
function validation(form) {
   let result = true
   // Поиск ошибки
   form.querySelectorAll("input").forEach((input) => {
      if (input.hasAttribute("data-reg")) {
         let reg = new RegExp(input.getAttribute("data-reg"))
         if (!reg.test(input.value)) {
            removeError(input)
            input.setAttribute("data-error", 0)
            createError(input)
            result = false
            return
         }
         input.removeAttribute("data-error", 0)
         removeError(input)
      }
   });

   // Создает ошибку и проверяет тип ошибки
   function createError(input) {
      const parent = input.parentNode
      if (input.hasAttribute("data-error")) {
         const errorLabel = document.createElement("p")
         errorLabel.classList.add("paragraph-error")
         switch (input.getAttribute("type")) {
            case "text":
               errorLabel.textContent = "The field must contain only English letters"
               break;
            case "email":
               errorLabel.textContent = "Mail must contain: xxx@gmail.com"
               break;
            case "tel":
               errorLabel.textContent = "The number must contain at least 10 digits"
               break;
         }
         parent.classList.add("error")
         parent.append(errorLabel)
      }
   }
   // Удаляет ошибку
   function removeError(input) {
      const parent = input.parentNode
      if (parent.classList.contains('error')) {
         parent.querySelector(".paragraph-error").remove();
         parent.classList.remove("error")
      }
   }
   return result
}

// Проверка формы по клику на submit
document.getElementById("form").addEventListener("submit", function (e) {
   e.preventDefault()
   if (validation(this) == true) {
      alert("Form sent 😎")
      document.myForm.reset();
   }

})

// Проверка формы при событии input
document.getElementById("fieldset").addEventListener("input", function () {
   validation(this)
})












