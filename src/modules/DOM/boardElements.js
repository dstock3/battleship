import { Gameboard } from '../app/gameboard.js'
const body = document.getElementsByTagName("body")[0];

const boardGen = () => {
    const newBoard = Gameboard();
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board");
    body.appendChild(playerBoard);

    //Columns
    for (let y = 0; y < newBoard.letterArray.length; y++) {
        let column = document.createElement("div");
        column.classList.add("col");
        column.id = newBoard.letterArray[y];
        playerBoard.appendChild(column);
    };

    //Spaces
    let spaceArray = [];
    for (let i = 0; i < newBoard.spaceArray.length; i++) {
        let spaceObj = newBoard.spaceArray[i];
        let newSpace = document.createElement("div");
        newSpace.classList.add("space");
        newSpace.id = spaceObj.coord;
        spaceArray.push(newSpace);
    };

    let columns = Array.from(document.getElementsByClassName("col"))

    for (let x = 0; x < spaceArray.length; x++) {
        let space = spaceArray[x]
        for (let z = 0; z < columns.length; z++) {
            if (space.id.charAt(0) === columns[z].id) {
                columns[z].appendChild(space);
            };
        };
    };
};

export { body, boardGen }

