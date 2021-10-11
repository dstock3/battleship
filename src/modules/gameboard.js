import { Ship } from './ship'

const Gameboard = () => {
    const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const space = (position) => {
        return { position }
    }

    const createGrid = (() => {
        const spaceArray = []
        for (let i = 0; i < letterArray.length; i++) {
            for (let y = 1; y < 10; i++) {
                let newSpace = space(`${letterArray[i] + y}`)
                spaceArray.push(newSpace);
            };
        };
    })();

    const placeShip = () => {

    }

    return { createGrid, placeShip, spaceArray }
}