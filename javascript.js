const gridContainer = document.querySelector("#gridContainer");

//----------------
//Define grid size
//----------------
const gridSize = 50 * 50;

//----------------
// Create grid
//----------------
for (let i = 0; i < gridSize; i++) {
  let gridElement = document.createElement("div");
  gridElement.className = "gridElement";
  gridContainer.appendChild(gridElement);
}
