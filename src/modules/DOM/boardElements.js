import { header } from './title';
import { Gameboard } from '../app/gameboard.js'

const body = document.getElementsByTagName("body")[0];
body.appendChild(header);

const messageBox = document.createElement("div");
messageBox.classList.add("message-box");
body.appendChild(messageBox);

const masterContainer = document.createElement("div");
masterContainer.classList.add("master-container");
body.appendChild(masterContainer);

const boardGen = (allegiance, parent) => {
    const newBoard = Gameboard();
    let outerBoard = document.createElement("div");
    parent.appendChild(outerBoard);
    outerBoard.classList.add("outer-board");
    outerBoard.id = allegiance

    let numContainer = document.createElement("div");
    numContainer.classList.add("num-container");
    outerBoard.appendChild(numContainer);

    for (let y = 1; y < 11; y++) {
        let num = document.createElement("div");
        num.textContent = y
        num.classList.add("num");
        numContainer.appendChild(num)
    };

    let boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    outerBoard.appendChild(boardContainer);

    let letterContainer = document.createElement("div");
    letterContainer.classList.add("letter-container");
    boardContainer.appendChild(letterContainer);

    for (let i = 0; i < newBoard.letterArray.length; i++) {
        let letter = document.createElement("div");
        letter.textContent = newBoard.letterArray[i];
        letter.classList.add("letter");
        letterContainer.appendChild(letter)
    };

    let board = document.createElement("div");
    board.classList.add(`board`);
    board.id = `${allegiance}`
    boardContainer.appendChild(board);

    for (let y = 0; y < newBoard.letterArray.length; y++) {
        let column = document.createElement("div");
        column.classList.add("col");
        column.id = newBoard.letterArray[y];
        board.appendChild(column);
    };

    let spaceElements = [];
    for (let i = 0; i < newBoard.spaceArray.length; i++) {
        let spaceObj = newBoard.spaceArray[i];
        let newSpace = document.createElement("div");
        newSpace.classList.add("space");
        newSpace.id = allegiance.charAt(0) + spaceObj.coord;
        spaceElements.push(newSpace);
    };

    let columns = Array.from(document.getElementsByClassName("col"))

    for (let x = 0; x < spaceElements.length; x++) {
        let space = spaceElements[x]
        for (let z = 0; z < columns.length; z++) {
            if (space.id.charAt(1) === columns[z].id) {
                columns[z].appendChild(space);
            };
        };
    };

    return { newBoard, spaceElements, outerBoard, boardContainer }
};

export { body, masterContainer, boardGen }