const registerHit = (hitResult) => {
    if (hitResult) {
        playerBoard.spaceElements[i].style.backgroundColor = "#a83244";
    } else {
        playerBoard.spaceElements[i].textContent = "X";
        playerBoard.spaceElements[i].style.textAlign = "center";
        playerBoard.spaceElements[i].style.fontSize = "3em";
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