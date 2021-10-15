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

    const determineOrientation = () => {
        let letterIndex = Math.floor(Math.random() * letterArray.length);
        let chooseLetter = letterArray[letterIndex];
        let numIndex = Math.floor(Math.random() * 10) + 1;
        let startingCoord = chooseLetter + numIndex;

        let orientation
        let chance = Math.floor(Math.random() * 1);

        if (chance === 0) {
            orientation = "vert"
        } else {
            orientation = "horz"
        };

        if (orientation === "vert") {
            if (numIndex <= 5) {
                position = true
            } else {
                position = false
            } 
        }
        if (orientation === "horz") {
            for (let i = 0; i < letterArray.length; i++) {
                if (chooseLetter === letterArray[i]) {
                    if (i < 5) {
                        position = true
                    } else {
                        position = false

                    };
                };
            };
        };

        return  [orientation, position, startingCoord]
    };

    function removeFromBoard(possibleCoords, coord) {
        for (let i = 0; i < possibleCoords.length; ) {
            if (possibleCoords[i] === coord) {
                possibleCoords.splice(i, 1)
                return possibleCoords
            };
        };
    };
    
    const determineCoords = (length, orientation, position, startingCoord, spaceArray) => {
        let coordArray = [startingCoord];
            if ((orientation === "vert") && (position)) {
                for (let y = 1; y < length.length; y++) {
                    numIndex += 1;
                    newCoord = chooseLetter + numIndex;
                    coordArray.push(newCoord) 
                };
            };
            if ((orientation === "vert") && (!position)) {
                for (let y = 1; y < length.length; y++) {
                    numIndex -= 1;
                    newCoord = chooseLetter + numIndex;
                    coordArray.push(newCoord) 
                };
            };
            if ((orientation === "horz") && (position)) {
                for (let y = 1; y < length.length; y++) {
                    for (let x = 0; x < letterArray.length; x++) {
                        if (chooseLetter === letterArray[x]) {
                            if (x < 5) {
                                for (let z = 5; z > 0; z--) {
                                    newCoord = letterArray[z] + numIndex
                                    coordArray.push(newCoord) 
                                }
                            } else {
                                for (let z = 6; z < 11; z++) {
                                    newCoord = letterArray[z] + numIndex
                                    coordArray.push(newCoord) 
                                }
                            };

                        };
                    };
                };
            };
            if ((orientation === "horz") && (!position)) {
                for (let y = 1; y < length.length; y++) {
                    for (let y = 1; y < length.length; y++) {
                        for (let x = 0; x < letterArray.length; x++) {
                            if (chooseLetter === letterArray[x]) {
                                if (x < 5) {

    
                                } else {
    
                                };
                            };
                        };
     
                    };     
                };
            };

        for (let i = 0; i < coordArray.length; i++) {
            spaceArray = removeFromBoard(spaceArray, coordArray[i])
        };

        return [coordArray, spaceArray]

    };

    const assignPositions = () => {
        let enemyPositions = []

        for (let i = 1; i < 6; i++) {
            if (i === 1) {
                let position = determineOrientation()

                let carrierInfo = determineCoords(5, position[0], position[1], position[2], spaceArray)
                let carrierPosition = carrierInfo[0];
                spaceArray = carrierInfo[1];
                enemyPositions.push(carrierPosition)
            };
            if (i === 2) {
                let position = determineOrientation()
                let battleshipInfo = determineCoords(4, position[0], position[1], position[2], spaceArray)
                let battleshipPosition = battleshipInfo[0];
                spaceArray = battleshipInfo[1];
                enemyPositions.push(battleshipPosition)

            };
            if (i === 3) {
                let position = determineOrientation()
                let cruiserInfo = determineCoords(3, position[0], position[1], position[2], spaceArray)
                let cruiserPosition = cruiserInfo[0];
                spaceArray = cruiserInfo[1];
                enemyPositions.push(cruiserPosition)
            };
            if (i === 4) {
                let position = determineOrientation()
                let submarineInfo = determineCoords(3, position[0], position[1], position[2], spaceArray)
                let submarinePosition = submarineInfo[0];
                spaceArray = submarineInfo[1];
                enemyPositions.push(submarinePosition)
            };
            if (i === 5){
                let position = determineOrientation()
                let destroyerInfo = determineCoords(2, position[0], position[1], position[2], spaceArray)
                let destroyerPosition = destroyerInfo[0];
                spaceArray = destroyerInfo[1];
                enemyPositions.push(destroyerPosition)
            };
        };        
        return enemyPositions
    };

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
};

export { Gameboard }