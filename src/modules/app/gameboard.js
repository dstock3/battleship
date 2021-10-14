import { Ship } from './ship'

const Gameboard = () => {
    const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const spaceArray = []

    const createGrid = (() => {
        for (let i = 0; i < letterArray.length; i++) {
            let letter = letterArray[i];
            for (let y = 0; y < 10; y++) {
                let spaceNum = y + 1;
                let spaceObj = new Object();
                spaceObj.coord = `${letter + spaceNum}`;
                spaceObj.isOccupied = false;
                spaceObj.isHit = false;
                spaceArray.push(spaceObj);
            };
        };
    })();

    const shipArray = [];

    const assignPositions = () => {
        for (let i = 0; i < letterArray.length; i++) {
            
        }

        let possibleCoords = []


        let coordIndex = Math.floor(Math.random() * possibleCoords.length);

        return [battleshipPosition, cruiserPosition, carrierPosition, submarinePosition, destroyerPosition]
    }

    const placeShip = (shipType, coordArray) => {        
        let newShip = Ship(shipType[1], shipType[2], shipType[3]);
        let base = newShip;
        let type = shipType[0]; 
        let coords = coordArray;

        for (let i = 0; i < coords.length; i++) {
            for (let y = 0; y < spaceArray.length; y++) {
                if (coords[i] === spaceArray[y].coord) {
                    spaceArray[y].isOccupied = true;
                };
            };
        };

        return { base, type, coords }
    };

    const receiveAttack = (coordinate) =>  {
        for (let i = 0; i < spaceArray.length; i++) {
            if (spaceArray[i].coord === coordinate) {
                spaceArray[i].isHit = true;
                
            };
        };
    };

    return { letterArray, createGrid, placeShip, spaceArray, receiveAttack, assignPositions }
}

export { Gameboard }