import './style.css';
import { header } from './modules/DOM/title';
import { Player, ComputerPlayer } from './modules/app/player';
import { registerHit, yourMove } from './modules/DOM/events';
import { enemyBoard, playerBoard } from './modules/DOM/placement';

const newPlayer = Player(enemyBoard.newBoard) 
const enemy = ComputerPlayer(playerBoard.newBoard)

yourMove(enemyBoard, playerBoard, enemy, newPlayer, registerHit);




