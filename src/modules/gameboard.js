import { Ship } from './ship'

const Gameboard = () => {
    const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const space = (position) => {
        return { position }
    };

    const spaceArray = []

    const createGrid = (() => {
        for (let i = 0; i < letterArray.length; i++) {
            let letter = letterArray[i];
            for (let y = 0; y < 10; y++) {
                let spaceNum = y + 1;
                let newSpace = space(`${letter + spaceNum}`)
                spaceArray.push(newSpace);
            };
        };
    })();

    const placeShip = () => {

    };

    return { letterArray, createGrid, placeShip, spaceArray }
}

export { Gameboard }