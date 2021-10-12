import './style.css'
import { Gameboard } from "./modules/gameboard";

const newBoard = Gameboard();
const body = document.getElementsByTagName("body")[0];
let playerBoard = document.createElement("div");
playerBoard.classList.add("player-board");
body.appendChild(playerBoard);

for (let i = 0; i < newBoard.spaceArray.length; i++) {
    let spaceObj = newBoard.spaceArray[i];
    let newSpace = document.createElement("div");
    newSpace.classList.add("space");
    newSpace.id = spaceObj.coord;

    for (let y = 0; y < newBoard.letterArray.length; y++) {
        if (newSpace.id.charAt(0) === newBoard.letterArray[y]) {

        }
    }


    playerBoard.appendChild(row);
};

