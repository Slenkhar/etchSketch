const gridContainer = document.querySelector("#gridContainer");
const gridReset = document.querySelector("#gridReset");

//----------------
// Create grid
//----------------
gridReset.addEventListener("click", createGrid);

function createGrid() {
  gridContainer.innerHTML = "";

  let size = +prompt("How many squares per side? (16/20/32/40/50): ");
  const percent = 100 / size;

  document.documentElement.style.setProperty("--grid-percent", `${percent}%`);

  for (let i = 0; i < size * size; i++) {
    let gridElement = document.createElement("div");
    gridElement.className = "gridElement";
    gridContainer.appendChild(gridElement);
  }
}
