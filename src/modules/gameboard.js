import { Ship } from './ship'

const Gameboard = () => {

    const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const space = (position) => {
        return { position }
    }

    const createGrid = () => {
        for (let i = 0; i < letterArray.length; i++) {
            for (let y = 1; y < 10; i++) {
                space(`${letterArray[i]} + y`)
            };
        };
    };

    const placeShip = () => {

    }

}