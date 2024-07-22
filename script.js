const gridContainer = document.querySelector(".square-grid")
const gridChild = document.createElement("div")

gridChild.classList.add('grid-child');
gridChild.style.backgroundColor = 'red';
gridChild.style.border = '2px solid black';
gridChild.textContent = 'Grid child'

for (let i = 0; i < 16; i++ ) {
    gridContainer.appendChild(gridChild);
}