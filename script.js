const grid = document.querySelector(".grid")
let gridValue = document.querySelector('.grid-size')
let gridSize = document.querySelector('input');
const resetButton = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);

function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('grid-child');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`

    return div;
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize))
        }
    }
}

function reset() {
    while (grid.firstChild) grid.removeChild(grid.lastChild);
    createGrid(squareSize);
}

grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.grid-child')) {
        e.target.classList.add('active');
    }
})

gridSize.addEventListener('input', function (e) {
    squareSize = e.target.value;
    gridValue.textContent = `${squareSize}x${squareSize}`;
})

applyGridSize.addEventListener('click', function () {
    reset();
})

resetButton.addEventListener('click', reset);