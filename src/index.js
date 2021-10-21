import './style.css';
import { Player, ComputerPlayer } from './modules/app/player';
import { registerHit, yourMove, nextMove } from './modules/DOM/events';
import { enemyPositions, playerBoard, playerShipList, placeNewShip, playerPrompt } from './modules/DOM/placement';

let newPrompt = playerPrompt();
placeNewShip(newPrompt.promptBoard, 5, "hor")

/*
const enemyBoard = enemyPositions.enemyBoard
const newPlayer = Player(enemyBoard.newBoard) 
const enemy = ComputerPlayer(playerBoard.newBoard)

let playerHits = 0;
let enemyHits = 0;

let score = yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits);

console.log("Player Hits: " + playerHits)
console.log("Enemy Hits: " + enemyHits)

if ((score.playerHits === 17) || (score.enemyHits === 17)) {
    console.log("game over")
}
*/






