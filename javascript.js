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

  for (let i = 0; i < size * size; i++) {
    let gridElement = document.createElement("div");
    gridElement.className = "gridElement";
    gridContainer.appendChild(gridElement);
    gridElement.style.backgroundColor = setStartColor();
    gridElement.style.opacity = 0;
  }
}

//------------------
// Hover Etch logic
//------------------

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("gridElement")) {
    e.target.classList.add("hovered");
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
  }
});

//------------------
// Helper functions
//------------------

function setStartColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
