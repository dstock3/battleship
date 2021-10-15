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

    function getChance() {
        let chance = Math.floor(Math.random() * 2);

        let orientation
        if (chance === 0) {
            orientation = "vert"
        } else {
            orientation = "hor"
        };
        return orientation
    };

    function getPosition(orientation, letter, num) {
        let position
        if (orientation === "vert") {
            if (num <= 5) {
                position = true
            } else {
                position = false
            };
        };
        
        if (orientation === "hor") {
            for (let i = 0; i < letterArray.length; i++) {
                if (letter === letterArray[i]) {
                    if (i < 5) {
                        position = true
                    } else {
                        position = false
                    };
                };
            };
        };
        return position
    }

    const determineOrientation = () => {
        let letterIndex = Math.floor(Math.random() * letterArray.length);
        let chooseLetter = letterArray[letterIndex];
        let numIndex = Math.floor(Math.random() * 10) + 1;
        let startingCoord = chooseLetter + numIndex;
        let orientation = getChance();
        let position = getPosition(orientation, chooseLetter, numIndex);

        return  { orientation, position, startingCoord } 
    };

    const removeFromBoard = (possibleCoords, coord) => {
        for (let i = 0; i < possibleCoords.length; ) {
            if (possibleCoords[i] === coord) {
                possibleCoords.splice(i, 1);
                return possibleCoords
            };
        };
    };

    const determineCoords = (shipLength, coordInfo) => {
        let coordArray = [coordInfo.startingCoord];
        let coordNum
        if (coordInfo.startingCoord.charAt(2)) {
            let numString = coordInfo.startingCoord.charAt(1) + coordInfo.startingCoord.charAt(2);
            coordNum = parseInt(numString)
        } else {
            coordNum = parseInt(coordInfo.startingCoord.charAt(1));
        };

        if ((coordInfo.orientation === "vert") && (coordInfo.position)) {
            for (let y = 1; y < shipLength; y++) {
                coordNum += 1;
                let newCoord = coordInfo.startingCoord.charAt(0) + `${coordNum}`
                coordArray.push(newCoord) 
            };
        };
        
        if ((coordInfo.orientation === "vert") && (!coordInfo.position)) {
            for (let y = 1; y < shipLength; y++) {
                coordNum -= 1;
                let newCoord = coordInfo.startingCoord.charAt(0) + `${coordNum}`
                coordArray.push(newCoord) 
            };
        };
        
        if ((coordInfo.orientation === "hor") && (coordInfo.position)) {
            for (let x = 0; x < letterArray.length; x++) {
                if (coordInfo.startingCoord.charAt(0) === letterArray[x]) {
                    let coordLetterIndex = x
                    for (let y = 1; y < shipLength; y++) {
                        coordLetterIndex += 1
                        let newCoord = letterArray[coordLetterIndex] + coordNum;
                        coordArray.push(newCoord);
                    };
                };
            };
        };

        if ((coordInfo.orientation === "hor") && (!coordInfo.position)) {
            for (let x = 0; x < letterArray.length; x++) {
                if (coordInfo.startingCoord.charAt(0) === letterArray[x]) {
                    let coordLetterIndex = x
                    for (let y = 1; y < shipLength; y++) {
                        coordLetterIndex -= 1
                        let newCoord = letterArray[coordLetterIndex] + coordNum;
                        coordArray.push(newCoord);
                    };
                };
            };
        };
        return coordArray
    };

    function possibleCoordsCheck(shipPosition, enemyPositionsArray, len) {
        for (let i = 0; i < enemyPositionsArray.length; i++) {
            let enemyPositions = enemyPositionsArray[i]
            if (shipPosition.some(y => enemyPositions.indexOf(y) >= 0)) {
                let position = determineOrientation();
                shipPosition = determineCoords(len, position);
                possibleCoordsCheck(shipPosition, enemyPositionsArray, len);
            } else {
                return shipPosition
            };
        };
    };

    const assignPositions = () => {
        let enemyPositions = [];

        let position = determineOrientation();
        let carrierPosition = determineCoords(5, position)
        enemyPositions.push(carrierPosition);

        position = determineOrientation();
        let initBattleship = determineCoords(4, position);
        let battleshipPosition = possibleCoordsCheck(initBattleship, enemyPositions, 4);
        enemyPositions.push(battleshipPosition);

        position = determineOrientation();
        let initCruiserPosition = determineCoords(3, position);
        let cruiserPosition = possibleCoordsCheck(initCruiserPosition, enemyPositions, 3);
        enemyPositions.push(cruiserPosition);

        position = determineOrientation();
        let initSubmarinePosition = determineCoords(3, position);
        let submarinePosition = possibleCoordsCheck(initSubmarinePosition, enemyPositions, 3);
        enemyPositions.push(submarinePosition);

        position = determineOrientation();
        let initDestroyerPosition = determineCoords(2, position);
        let destroyerPosition = possibleCoordsCheck(initDestroyerPosition, enemyPositions, 2);
        enemyPositions.push(destroyerPosition);
        console.log(enemyPositions)

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

    return { letterArray, createGrid, placeShip, spaceArray, receiveAttack, determineOrientation, determineCoords, assignPositions }
};

export { Gameboard }