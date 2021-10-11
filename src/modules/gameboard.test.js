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


/*
test("The placeShip method is functional", () => {
    let coordArray = ["A2", "B2", "C2"];
    let newSet = shipSet();
    testBoard.placeShip(newSet.cruiser, coordArray);
    expect(newSet.cruiser).toBe(100);
}); */
