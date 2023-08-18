// Selecteaza elementele contorului
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector("#value");

// Initializeaza valoarea counterValue
let counterValue = 0;

// Functia de update pentru counter value pe interfata
function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

// Event listener pentru buton decrement
decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounterValue();
});

// Event listener pentru buton increment
incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounterValue();
});

// Actualizarea inițială a valorii contorului de pe interfață
updateCounterValue();
