/**
 * @jest-environment jsdom
 */


import { Gameboard } from './gameboard'
import { shipSet } from './ship'

const testBoard = Gameboard();

test("the Gameboard factory returns a board with 100 spaces", () => {
    expect(testBoard.spaceArray.length).toBe(100);
});

test("Gameboard factory returns a board with 10 spaces for each respective letter", () => {
    var checkArray = [];

    for (let y = 0; y < testBoard.letterArray.length; y++) {
        var check = 0
        for (let i = 0; i < testBoard.spaceArray.length; i++) {
            let spaceObj = testBoard.spaceArray[i];

            if (spaceObj.coord.charAt(0) === testBoard.letterArray[y]) {
                check += 1
            };  
        };
        checkArray.push(check);          
    };
    expect(checkArray.length).toBe(10);
    expect(checkArray.every((position) => position === 10)).toBe(true);
});

test("the Gameboard factory returns default values of false for both isHit and isOccupied for each space", () => {
    let check = false;
    let checkArray = [];
    for (let i = 0; i < testBoard.spaceArray.length; i++) {
        let spaceObj = testBoard.spaceArray[i];    
        if (spaceObj.isOccupied || spaceObj.isHit) {
            check = true
        };
        checkArray.push(check);
    }
     
    expect(checkArray.every((position) => position === false)).toBe(true);
});


test("The receiveAttack method effectively renders multiple hits on the board", () => {
    testBoard.receiveAttack("A2");
    testBoard.receiveAttack("B4");
    testBoard.receiveAttack("C5");
    for (let i = 0; i < testBoard.spaceArray.length; i++) {
        if (testBoard.spaceArray[i].coord === "A2") {
            expect(testBoard.spaceArray[i].isHit).toBe(true);
        };
        if (testBoard.spaceArray[i].coord === "B4") {
            expect(testBoard.spaceArray[i].isHit).toBe(true);
        };
        if (testBoard.spaceArray[i].coord === "C5") {
            expect(testBoard.spaceArray[i].isHit).toBe(true);
        };
    };
});

test("The placeShip method is functional", () => {
    let coordArray = ["A2", "B2", "C2"];
    let newSet = shipSet();
    let newShip = testBoard.placeShip(newSet.cruiser, coordArray);

    expect(newShip.coords.length).toBe(3);
    expect(newShip.type).toBe("cruiser");
}); 

test("determineOrientation method effectively generates a random coordinate", () => {
    let coordInfo = testBoard.determineOrientation();
    let letter = coordInfo[2].charAt(0)
    let letterCheck = 0;
    for (let i = 0; i < testBoard.letterArray.length; i++) {
        if (letter === testBoard.letterArray[i])
        letterCheck += 1 
    }
    expect(letterCheck).toBe(1);

    let num = parseInt(coordInfo[2].charAt(1));

    let numCheck = 0;
    for (let i = 1; i < 11; i++) {
        if (num === i)
        numCheck += 1 
    };
    expect(numCheck).toBe(1);
});

test("The removeFromBoard method effectively eliminates positions from a possible coordinates array", () => {
    let possibleCoords = []
    for (let i = 0; i < testBoard.spaceArray.length; i++) {
        possibleCoords.push(testBoard.spaceArray[i].coord)
    }

    for (let i = 0; i < 50; i++) {
        possibleCoords = testBoard.removeFromBoard(possibleCoords, testBoard.spaceArray[i].coord)
    }
    expect(possibleCoords.length).toBe(50);

    for (let i = 50; i < 100; i++) {
        possibleCoords = testBoard.removeFromBoard(possibleCoords, testBoard.spaceArray[i].coord)
    }
    expect(possibleCoords.length).toBe(0)
});