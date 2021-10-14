const registerHit = (playerBoard, move) => {
    for (let i = 0; i < playerBoard.newBoard.spaceArray.length; i++) {
        let playerSpaceObj = playerBoard.newBoard.spaceArray[i];
        if (move === playerSpaceObj.coord) {
            if (playerSpaceObj.isOccupied && playerSpaceObj.isHit) {
                if (playerBoard.spaceElements[i].id === playerSpaceObj.coord) {
                    playerBoard.spaceElements[i].style.backgroundColor = "#a83244";
                };
            };

            if ((playerSpaceObj.isHit) && (!playerSpaceObj.isOccupied)) {
                playerBoard.spaceElements[i].textContent = "X";
                playerBoard.spaceElements[i].style.textAlign = "center";
                playerBoard.spaceElements[i].style.fontSize = "3em";
                playerBoard.spaceElements[i].style.backgroundColor = "#aca8ff";
            };
        };
    };
};

export { registerHit }