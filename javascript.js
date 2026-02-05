const gridContainer = document.querySelector("#gridContainer");
const gridReset = document.querySelector("#gridReset");

//-------------
// Create grid
//-------------
gridReset.addEventListener("click", createGrid);

function createGrid() {
  gridContainer.innerHTML = "";

  let size = +prompt("How many squares per side? (max 50): ");
  size = size > 50 ? 50 : size;
  const percent = 100 / size;

  document.documentElement.style.setProperty("--grid-percent", `${percent}%`);
  document.documentElement.style.setProperty("--grid-color", setStartColor());

  for (let i = 0; i < size * size; i++) {
    let gridElement = document.createElement("div");
    gridElement.className = "gridElement";
    gridContainer.appendChild(gridElement);
    gridElement.style.opacity = 0;
  }
}

//--------------------------------------
// Hover Etch logic for mobile + desktop
//--------------------------------------

let drawing = false;

gridContainer.addEventListener("pointerdown", (e) => {
  drawing = true;
  paint(e);
});

gridContainer.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  paint(e);
});

document.addEventListener("pointerup", () => {
  drawing = false;
});

function paint(e) {
  if (!e.target.classList.contains("gridElement")) return;
  e.target.style.opacity = Number(e.target.style.opacity) + 0.15;
}

//------------------
// Helper functions
//------------------

function setStartColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//------------------------
// Prevent drag on desktop
//------------------------
