const registerHit = (playerBoard, index) => {
    let playerSpaceObj = playerBoard.newBoard.spaceArray[index];
    if (playerSpaceObj.isOccupied && playerSpaceObj.isHit) {
        if (playerBoard.spaceElements[index].id === playerSpaceObj.coord) {
            playerBoard.spaceElements[index].style.backgroundColor = "#a83244";
        };
    };

    if ((playerSpaceObj.isHit) && (!playerSpaceObj.isOccupied)) {
        if (playerBoard.spaceElements[index].id === playerSpaceObj.coord) {
            playerBoard.spaceElements[index].textContent = "X";
            playerBoard.spaceElements[index].style.textAlign = "center";
            playerBoard.spaceElements[index].style.fontSize = "3em";

        };
    };
};

export { registerHit }