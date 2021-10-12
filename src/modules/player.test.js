import { Player, computerPlayer } from './player'
import { Gameboard } from './gameboard'

const enemyBoard = Gameboard();
const testPlayer = Player(enemyBoard);
const computer = computerPlayer();

test("The move method effectively renders a hit on the board", () => {
    testPlayer.move("A2");
    for (let i = 0; i < enemyBoard.spaceArray.length; i++) {
        if (enemyBoard.spaceArray[i].coord === "A2") {
            expect(enemyBoard.spaceArray[i].isHit).toBe(true);
        };
    };
});

test("The computer player effectively performs a random move", () => {
    computer.randomMove();
    let check = 0
    for (let i = 0; i < computer.playerBoard.spaceArray.length; i++) {
        if (computer.playerBoard.spaceArray[i].isHit) {
            check += 1;
        };
    };
    expect(check).toBe(1);
});

test("The computer player cannot move in the same place twice", () => {
    
    for (let i = 1; i < 100; i++) {
        computer.randomMove();
    };

    let testArray = [];
    let check = true;

    for (let i = 0; i < computer.playerBoard.spaceArray.length; i++) {
        if (computer.playerBoard.spaceArray[i].isHit) {
            let previousCoord = computer.playerBoard.spaceArray[i].coord;
            for (let y = 0; y < testArray.length; y++) {
                if (testArray[y] === previousCoord) {
                    check = false
                };
            };
            testArray.push(computer.playerBoard.spaceArray[i].coord);
        };
    };

    expect(check).toBe(true);
});