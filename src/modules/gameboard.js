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

    const placeShip = (ship, coordinates) => {
        
    };

    const receiveAttack = (coordinate) =>  {
        for (let i = 0; i < spaceArray.length; i++) {
            if (spaceArray[i].coord === coordinate) {
                spaceArray[i].isHit = true;
            };
        };
    };

    return { letterArray, createGrid, placeShip, spaceArray, receiveAttack }
}

export { Gameboard }