/**
 * @jest-environment jsdom
 */

import { Player, ComputerPlayer } from './player'
import { Gameboard } from './gameboard'

const enemyBoard = Gameboard();
const testPlayer = Player(enemyBoard);

const playerBoard = Gameboard();
const computer = ComputerPlayer(playerBoard);

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
    for (let i = 0; i < playerBoard.spaceArray.length; i++) {
        if (playerBoard.spaceArray[i].isHit) {
            check += 1;
        };
    };
    expect(check).toBe(1);
});

test("The computer player can't attack the same position more than once", () => {
    let testArray = []
    let fail = false;
    for (let i = 0; i < playerBoard.spaceArray.length; i++) {
        let newMove = computer.randomMove();
        for (let y = 0; y < testArray.length; y++) {
            if (newMove === testArray[y]) {
                fail = true; 
            };
        };
        testArray.push(newMove);
    };
    
    expect(fail).toBe(false);
});

const newEnemyBoard = Gameboard();
const newTestPlayer = Player(newEnemyBoard);

const newPlayerBoard = Gameboard();
const newComputer = ComputerPlayer(newPlayerBoard);

test("The educated guess method effectively attacks valid coordinates.", () => {
    let previousAttack = "B2"
    let hitArray = newComputer.educatedGuess(previousAttack);
    expect(((hitArray[2]) === ("B1")) || ((hitArray[2]) === ("B3")) || ((hitArray[2]) === ("A2")) || ((hitArray[2]) === ("C2")) ).toBe(true);
});

test("The educated guess method effectively attacks valid coordinates based on a prior coordinate in the corner.", () => {
    let previousAttack = "A10"
    let hitArray = newComputer.educatedGuess(previousAttack);
    console.log(hitArray[2])
    expect(((hitArray[2]) === ("A9")) || ((hitArray[2]) === ("B10"))).toBe(true);
});





