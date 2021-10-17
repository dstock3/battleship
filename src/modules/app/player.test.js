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
/*
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
*/

test("The educated guess method effectively attacks valid coordinates.", () => {
    let previousAttacks = ["E5", "F4", "B3", "J3", "E6"]
    for (let x = 0; x < previousAttacks.length; x++) {
        let previousAttack = previousAttacks[x];

        let previousAttackNum
        if (previousAttack.charAt(2)) {
            let numString = previousAttack.charAt(1) + previousAttack.charAt(2);
            previousAttackNum = parseInt(numString)
        } else {
            previousAttackNum = parseInt(previousAttack.charAt(1));
        };

        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            if (playerBoard.spaceArray[i].coord === previousAttack)
            playerBoard.spaceArray[i].isHit = true
        };

        let hitArray = computer.educatedGuess(previousAttack);
        let attackCoord = hitArray[2]

        let possibleCoordNum
        if (attackCoord.charAt(2)) {
            let numString = attackCoord.charAt(1) + attackCoord.charAt(2);
            possibleCoordNum = parseInt(numString)
        } else {
            possibleCoordNum = parseInt(attackCoord.charAt(1));
        };
        expect((attackCoord.charAt(0)) === (previousAttack.charAt(0))).toBe(true);
        expect((possibleCoordNum) === (previousAttackNum - 1) || (possibleCoordNum) === (previousAttackNum + 1)).toBe(true);
    };
});



