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

    const possibleCoords = [];
    for (let i = 0; i < spaceArray.length; i++) {
        possibleCoords.push(spaceArray[i].coord);
    };

    const determineCoords = (shipLength, coordInfo, possibleCoords) => {
        let coordArray = [coordInfo.startingCoord];
        let coordNum
        if (coordInfo.startingCoord.charAt(2)) {
            let numString = coordInfo.startingCoord.charAt(1) + coordInfo.startingCoord.charAt(2);
            coordNum = parseInt(numString)
        } else {
            coordNum = parseInt(coordInfo.startingCoord.charAt(1));
            console.log(coordNum)
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
        
        for (let i = 0; i < coordArray.length; i++) {
            possibleCoords = removeFromBoard(possibleCoords, coordArray[i])
        };

        return { coordArray, possibleCoords }
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

    return { letterArray, createGrid, placeShip, spaceArray, receiveAttack, determineOrientation, determineCoords, assignPositions, removeFromBoard, possibleCoords }
};

export { Gameboard }