import './style.css';

import { Player, ComputerPlayer } from './modules/app/player';
import { registerHit, yourMove, nextMove } from './modules/DOM/events';
import { enemyPositions, playerBoard, playerShipList } from './modules/DOM/placement';

const enemyBoard = enemyPositions.enemyBoard
const newPlayer = Player(enemyBoard.newBoard) 
const enemy = ComputerPlayer(playerBoard.newBoard)

let playerHits = 0;
let enemyHits = 0;

let score = yourMove(enemyBoard, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits);

if (score) {
    score = nextMove(score.enemyHitArray, enemyBoard, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits)
    console.log(score)
}


console.log("Player Hits: " + playerHits)
console.log("Enemy Hits: " + enemyHits)


if ((score.playerHits === 17) || (score.enemyHits === 17)) {
    console.log("game over")
}






