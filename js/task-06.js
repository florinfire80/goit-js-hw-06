const validationInput = document.getElementById("validation-input");
const validClass = "valid";
const invalidClass = "invalid";

function handleBlur() {
  const desiredLength = parseInt(validationInput.getAttribute("data-length"));
  const enteredLength = validationInput.value.length;

  if (enteredLength === desiredLength) {
    validationInput.classList.remove(invalidClass);
    validationInput.classList.add(validClass);
  } else {
    validationInput.classList.remove(validClass);
    validationInput.classList.add(invalidClass);
  }
}

validationInput.addEventListener("blur", handleBlur);
