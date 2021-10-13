import './style.css';
import { boardGen } from './modules/DOM/boardElements'
import { header } from './modules/DOM/title'
import { shipSet } from './modules/app/ship'

const body = document.getElementsByTagName("body")[0];
body.appendChild(header);

const masterContainer = document.createElement("div");
masterContainer.classList.add("master-container");
body.appendChild(masterContainer);

let playerBoard = boardGen("player", masterContainer)

let ships = shipSet();

const setSail = (ship) => {
    const spaces = Array.from(document.getElementsByClassName("space"));
    for (let i = 0; i < ship.coords.length; i++) {
        for (let y = 0; y < spaces.length; y++) {
            if (ship.coords[i] === spaces[y].id) {
                spaces[y].style.backgroundColor = "#93989c"
                spaces[y].classList.add("occupied");
            };
        };
    };
};

const battleship = playerBoard.newBoard.placeShip(ships.battleship, ["A1", "A2", "A3", "A4"]);
const cruiser = playerBoard.newBoard.placeShip(ships.cruiser, ["C5", "C6", "C7"]);
const carrier = playerBoard.newBoard.placeShip(ships.carrier, ["D2", "E2", "F2", "G2", "H2"]);
const submarine = playerBoard.newBoard.placeShip(ships.submarine, ["F10", "F9", "F8"]);
const destroyer = playerBoard.newBoard.placeShip(ships.destroyer, ["H7", "H6"]);
const shipList = [battleship, cruiser, carrier, submarine, destroyer]

for (let i = 0; i < shipList.length; i++) {
    setSail(shipList[i])
}

let enemyBoard = boardGen("enemy", masterContainer)


