const registerHit = (playerBoard, hitArray) => {
    let hitResult = hitArray[0];
    let index = hitArray[1];
    let coord = hitArray[2];
    if (playerBoard.spaceElements[index].id === coord) {
        if (hitResult) {
            playerBoard.spaceElements[index].style.backgroundColor = "#a83244";
        } else {
            playerBoard.spaceElements[index].textContent = "X";
            playerBoard.spaceElements[index].style.textAlign = "center";
            playerBoard.spaceElements[index].style.fontSize = "3em";
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