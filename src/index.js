import './style.css';
import { boardGen } from './modules/DOM/boardElements'
import { header } from './modules/DOM/title'
import { shipSet } from './modules/app/ship'

const body = document.getElementsByTagName("body")[0];
body.appendChild(header);

const masterContainer = document.createElement("div");
masterContainer.classList.add("master-container");
body.appendChild(masterContainer);

let playerBoard = boardGen("player", masterContainer);

let ships = shipSet();

const setSail = (ship) => {
    const spaces = Array.from(document.getElementsByClassName("space"));
    for (let i = 0; i < ship.coords.length; i++) {
        for (let y = 0; y < spaces.length; y++) {
            if (ship.coords[i] === spaces[y].id) {
                spaces[y].style.backgroundColor = "#0377fc";
                spaces[y].classList.add("occupied");
            };
        };
    };
};

const playerBattleship = playerBoard.newBoard.placeShip(ships.battleship, ["A1", "A2", "A3", "A4"]);
const playerCruiser = playerBoard.newBoard.placeShip(ships.cruiser, ["C5", "C6", "C7"]);
const playerCarrier = playerBoard.newBoard.placeShip(ships.carrier, ["D2", "E2", "F2", "G2", "H2"]);
const playerSubmarine = playerBoard.newBoard.placeShip(ships.submarine, ["F10", "F9", "F8"]);
const playerDestroyer = playerBoard.newBoard.placeShip(ships.destroyer, ["H7", "H6"]);
const playerShipList = [playerBattleship, playerCruiser, playerCarrier, playerSubmarine, playerDestroyer];

for (let i = 0; i < playerShipList.length; i++) {
    setSail(playerShipList[i])
}

let enemyBoard = boardGen("enemy", masterContainer);

const enemyBattleship = playerBoard.newBoard.placeShip(ships.battleship, ["A4", "A5", "A6", "A7"]);
const enemyCruiser = playerBoard.newBoard.placeShip(ships.cruiser, ["C7", "C8", "C9"]);
const enemyCarrier = playerBoard.newBoard.placeShip(ships.carrier, ["B2", "C2", "D2", "E2", "F2"]);
const enemySubmarine = playerBoard.newBoard.placeShip(ships.submarine, ["F10", "F9", "F8"]);
const enemyDestroyer = playerBoard.newBoard.placeShip(ships.destroyer, ["C9", "C10"]);
const enemyShipList = [enemyBattleship, enemyCruiser, enemyCarrier, enemySubmarine, enemyDestroyer];


