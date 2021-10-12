import { Player } from './player'
import { Gameboard } from './gameboard'

const enemyBoard = Gameboard();
const testPlayer = Player(enemyBoard);

test("The move method effectively renders a hit on the board", () => {
    testPlayer.move("A2");
    for (let i = 0; i < enemyBoard.spaceArray.length; i++) {
        if (enemyBoard.spaceArray[i].coord === "A2") {
            expect(enemyBoard.spaceArray[i].isHit).toBe(true);
        };
    };
});

/*
test("The computer player effectively performs a random move", () => {
    computer.randomMove();
    for (let i = 0; i < playerBoard.spaceArray.length; i++) {
        if (playerBoard.spaceArray[i].coord === "A2") {
            expect(playerBoard.spaceArray[i].isHit).toBe(true);
        };
    };
});
*/
