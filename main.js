let color = "black";
let click = true;

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size * size;
    for (let i = 0; i < total; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";

        board.insertAdjacentElement("beforeend", square);

    }
}
populateBoard(16);
function changeSize(input) {
    document.querySelector('.error').style.display = 'none';
    if (input >= 2 || input <= 100) {
        populateBoard(input);
    }
    else {
        document.querySelector('.error').style.display = 'flex';
    }
}
function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }

}

function changeColor(newColor) {
    color = newColor;
}
function reset() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode')
        }
    }
}
);
