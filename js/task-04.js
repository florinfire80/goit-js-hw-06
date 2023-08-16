// Select the counter elements
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector("#value");

// Initialize counterValue
let counterValue = 0;

// Function to update the counter value on the interface
function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

// Event listener for decrement button
decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounterValue();
});

// Event listener for increment button
incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounterValue();
});

// Initial update of the counter value on the interface
updateCounterValue();
