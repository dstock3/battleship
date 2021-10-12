import './style.css'
import { Ship, shipSet } from "./modules/ship";

const body = document.getElementsByTagName("body")[0];

const newBoard = Gameboard()

for (let i = 0; i < newBoard.spaceArray.length; i++) {
    let spaceObj = newBoard.spaceArray[i];
    let newSpace = document.createElement("div");
    newSpace.classList.add("space");
    newSpace.id = spaceObj.coord;
}

