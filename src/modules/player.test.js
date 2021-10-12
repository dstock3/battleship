import { Player, computer } from './player'
import { Gameboard } from './gameboard'

const enemyBoard = Gameboard();
const testPlayer = Player(enemyBoard);

test("The move method effectively renders a hit on the board", () => {
    testPlayer.move("A2");
})
