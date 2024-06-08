function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares=board.querySelectorAll("div");
    squares
    board.computedStyleMap.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.computedStyleMap.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
            
    }
}

function changeSize(input){
    populateBoard(input);
}