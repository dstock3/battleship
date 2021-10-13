import './style.css';
import { body, boardGen } from './modules/DOM/boardElements'
import { header } from './modules/DOM/title'

body.appendChild(header);

let playerBoard = boardGen()