import './style.css';
import { Player, ComputerPlayer } from './modules/app/player';
import { registerHit, yourMove, nextMove } from './modules/DOM/events';
import { enemyPositions, playerBoard, playerShipList, placement} from './modules/DOM/placement';


placement();

const enemyBoard = enemyPositions.enemyBoard
const newPlayer = Player(enemyBoard.newBoard) 
const enemy = ComputerPlayer(playerBoard.newBoard)

let playerHits = 0;
let enemyHits = 0;

let score = yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits);








