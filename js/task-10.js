const controlsDiv = document.querySelector("#controls");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes() {
  const amount = parseInt(controlsDiv.querySelector("input").value);
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
