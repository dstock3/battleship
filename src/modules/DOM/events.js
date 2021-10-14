function directHit(playerBoard, playerSpaceObj) {
    if (playerSpaceObj.isOccupied && playerSpaceObj.isHit) {
        for (let y = 0; y < playerBoard.spaceElements.length; y++) {
            if (playerBoard.spaceElements[y].id === playerSpaceObj.coord) {
                playerBoard.spaceElements[y].style.backgroundColor = "#a83244"
            };
        };
    };
};

function miss(move, playerBoard) {
    if ((move === playerSpaceObj.coord) && (!playerSpaceObj.isOccupied)) {
        for (let y = 0; y < playerBoard.spaceElements.length; y++) {
            if (playerBoard.spaceElements[y].id === playerSpaceObj.coord) {
                playerBoard.spaceElements[y].style.backgroundColor = "#a83244"
            };
        };
    };
};

export { directHit, miss }