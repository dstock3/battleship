import { Gameboard } from './gameboard'

const testBoard = Gameboard();

test("the Gameboard factory returns a board with 100 spaces", () => {
    expect(testBoard.spaceArray.length).toBe(100);
});

test("Gameboard returns a board with 10 spaces for each letter", () => {
    var checkArray = [];

    for (let y = 0; y < testBoard.letterArray.length; y++) {
        var check = 0
        for (let i = 0; i < testBoard.spaceArray.length; i++) {
            let space = testBoard.spaceArray[i];
            
            if (space.position.charAt(0) === testBoard.letterArray[y]) {
                check += 1
            };  
        };
        checkArray.push(check);          
    };
    
    expect(checkArray.every((position) => position === 10)).toBe(true);
});