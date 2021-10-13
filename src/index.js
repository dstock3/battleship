import './style.css';
import { body, boardGen } from './modules/DOM/boardElements'
import { header } from './modules/DOM/title'
import { shipSet } from './modules/app/ship'

body.appendChild(header);

let playerBoard = boardGen()
let ships = shipSet()

const sailing = (ship) => {
    const spaces = Array.from(document.getElementsByClassName("space"));
    for (let i = 0; i < ship.coords.length; i++) {
        for (let y = 0; y < spaces.length; y++) {
            if (ship.coords[i] === spaces[y].id) {
                spaces[y].style.backgroundColor = "#93989c"
            };
        };
    };
};

let battleship = playerBoard.newBoard.placeShip(ships.battleship, ["A1", "A2", "A3", "A4"]);
let cruiser = playerBoard.newBoard.placeShip(ships.cruiser, ["C5", "C6", "C7"]);
let carrier = playerBoard.newBoard.placeShip(ships.carrier, ["D2", "E2", "F2", "G2", "H2"]);

let submarine = playerBoard.newBoard.placeShip(ships.submarine, ["F10", "F9", "F8"]);

let destroyer = playerBoard.newBoard.placeShip(ships.destroyer, ["H7", "H6"]);

const shipList = [battleship, cruiser, carrier, submarine, destroyer]

for (let i = 0; i < shipList.length; i++) {
    sailing(shipList[i])
}