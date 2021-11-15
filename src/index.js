import './style.css';
import { Player, ComputerPlayer } from './modules/app/player';
import { registerHit, yourMove } from './modules/DOM/events';
import { enemyPositions, playerBoard, placement} from './modules/DOM/placement';

let newShipList = placement();

const enemyBoard = enemyPositions.enemyBoard
const newPlayer = Player(enemyBoard.newBoard) 
const enemy = ComputerPlayer(playerBoard.newBoard)

let playerHits = 0;
let enemyHits = 0;

yourMove(enemyPositions, playerBoard, newShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, false, null);








