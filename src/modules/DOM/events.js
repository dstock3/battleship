const registerHit = (playerBoard, hitArray) => {
    let hitResult = hitArray[0];
    let index = hitArray[1];
    let coord = hitArray[2];
    if (playerBoard.spaceElements[index].id === coord) {
        if (hitResult) {
            playerBoard.spaceElements[index].style.backgroundColor = "#a83244";
            return 1
        } else {
            playerBoard.spaceElements[index].textContent = "X";
            playerBoard.spaceElements[index].style.textAlign = "center";
            playerBoard.spaceElements[index].style.fontSize = "3em";
            return 0
        };
    };
};

const yourMove = (enemyPositions, playerBoard, enemy, newPlayer, registerHit) => {
    let enemyBoard = enemyPositions.enemyBoard
    let playerHits = 0;
    let enemyHits = 0;
    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        function performMove() {
            let coords = enemyBoard.spaceElements[i].id;
            let enemyHitArray = enemy.randomMove();
            let potentialEnemyHit = registerHit(playerBoard, enemyHitArray);
            enemyHits += potentialEnemyHit
            let playerHitArray = newPlayer.move(coords);
            let potentialPlayerHit = registerHit(enemyBoard, playerHitArray);
            playerHits += potentialPlayerHit;
            
            for (let i = 0; i < enemyPositions.enemyShipList.length; i++) {
                let ship = enemyPositions.enemyShipList[i];
                
                for (let y = 0; y < ship.coords.length; y++) {
                    if (ship.coords[y] === coords) {
                        for (let x = 0; x < ship.base.hitCount.length; x++) {
                            if (!ship.base.hitCount[x]) {
                                ship.base.hitCount[x] = true;

                                if (ship.base.isSunk()) {
                                    console.log(`You have sunk the enemy's ${ship.type}!`)
                                };
                                break
                            };
                        };
                    };
                };
            };


            
            console.log("Player Hits: " + playerHits)
            console.log("Enemy Hits: " + enemyHits)

            if ((playerHits === 17) || (enemyHits === 17)) {
                console.log("game over")
            }
        };
        enemyBoard.spaceElements[i].addEventListener("click", performMove);
    };
};

export { registerHit, yourMove }