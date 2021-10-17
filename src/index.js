import './style.css';

import { Player, ComputerPlayer } from './modules/app/player';
import { registerHit, yourMove } from './modules/DOM/events';
import { enemyPositions, playerBoard, playerShipList } from './modules/DOM/placement';

const enemyBoard = enemyPositions.enemyBoard
const newPlayer = Player(enemyBoard.newBoard) 
const enemy = ComputerPlayer(playerBoard.newBoard)

yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit);




