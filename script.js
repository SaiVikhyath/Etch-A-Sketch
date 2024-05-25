

const container = document.querySelector(".container");

const cellColors = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const sketchButton = document.querySelector(".draw");

const clearButton = document.querySelector(".clear");

function createGrid(size) {
    for(let idx = 0; idx < size * size; idx++) {
        const div = document.createElement("div");
        container.appendChild(div);
        let gridSize = size * size;
        div.setAttribute("style", `height:${Math.sqrt((600 * 600) / gridSize)}px`)
        div.setAttribute("style", `width:${Math.sqrt((600 * 600) / gridSize)}px`)
    }
}

function setGridColor() {
    let cellColor = "#";
    for (let idx = 0; idx < 6; idx++) {
        let random = Math.floor(Math.random() * 16);
        cellColor = cellColor + cellColors[random];
    }
    return cellColor;
}


function sketch() {
    let gridSize = Number(prompt("Enter the number of squares needed in the board"))

    createGrid(gridSize);

    const divs = document.querySelectorAll(".container div");

    divs.forEach((div) => 
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = setGridColor();
        })
    );
}

function clearBoard() {
    const divs = document.querySelectorAll(".container div");
    divs.forEach((div) => 
        div.style.backgroundColor = "#eeeeee"
    );
}


clearButton.addEventListener("click", () => clearBoard());

sketchButton.addEventListener("click", () => sketch());

