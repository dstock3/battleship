import { Gameboard } from './gameboard'

const testBoard = Gameboard();

test("the Gameboard factory returns a board with 100 spaces", () => {
    expect(testBoard.spaceArray.length).toBe(100);
});