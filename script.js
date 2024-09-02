const range = document.querySelector("#range-value");
const rangeText = document.querySelector(".range-text");
const container = document.querySelector(".container");
const showGridBtn = document.querySelector("#show-grid");
const clearBtn = document.querySelector("#clear-grid");

function makeGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        const sizeCell = 600 / size;
        cell.style.width = sizeCell + "px";
        cell.style.height = sizeCell + "px";
        cell.id = i + 1;
        if (showGridBtn.textContent === "Hide Grid") {
            cell.classList.add("cell");
        }
        container.appendChild(cell)
    }
}

function paintCell(cell) {
    if (cell.target.id) {
        cell.target.style.background =
            `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    }
}

function showGrid() {
    const showGrid = showGridBtn.textContent === "Show Grid";
    for (const cell of container.children) {
        cell.classList.toggle("cell", showGrid);
    }
    showGridBtn.textContent = showGrid ? "Hide Grid" : "Show Grid";
}

function clearGrid() {
    for (const cell of container.children) {
        cell.style.background = "";
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

range.addEventListener("input", (event) => {
    const size = event.target.value;
    rangeText.textContent = size;
    container.innerHTML = "";
    makeGrid(size);
});

container.addEventListener("mouseover", paintCell)

showGridBtn.addEventListener("click", showGrid)

clearBtn.addEventListener("click", clearGrid);

document.addEventListener("DOMContentLoaded", () => {
    const defaultSize = range.value;
    rangeText.textContent = defaultSize;
    makeGrid(defaultSize);
})
