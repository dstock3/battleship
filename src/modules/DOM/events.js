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
            };
        };
    };
};

const yourMove = (enemyBoard, playerBoard, enemy, newPlayer, registerHit) => {
    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        function performMove() {
            let coords = enemyBoard.spaceElements[i].id;
            let move = enemy.randomMove();
            registerHit(playerBoard, move);
            newPlayer.move(coords);
            registerHit(enemyBoard, coords);
        };
        enemyBoard.spaceElements[i].addEventListener("click", performMove);
    };
};

export { registerHit, yourMove }