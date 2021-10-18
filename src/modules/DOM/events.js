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

const shipDestroyed = (shipList, coords, player) => {
    for (let i = 0; i < shipList.length; i++) {
        let ship = shipList[i];
        
        for (let y = 0; y < ship.coords.length; y++) {
            if (ship.coords[y] === coords) {
                for (let x = 0; x < ship.base.hitCount.length; x++) {
                    if (!ship.base.hitCount[x]) {
                        ship.base.hitCount[x] = true;

                        if (ship.base.isSunk()) {
                            if (player === "player") {
                                console.log(`You have sunk the enemy's ${ship.type}!`)
                            } else {
                                console.log(`The enemy has sunk your ${ship.type}!`)
                            };
                        };
                        break
                    };
                };
            };
        };
    };
};

const yourMove = (enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits) => {
    let enemyBoard = enemyPositions.enemyBoard
    let playerIsHit

    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        function performMove() {
            let coords = enemyBoard.spaceElements[i].id;
            let playerHitArray = newPlayer.move(coords);
            let potentialPlayerHit = registerHit(enemyBoard, playerHitArray);
            playerHits += potentialPlayerHit;
            shipDestroyed(enemyPositions.enemyShipList, coords, "player")

            let enemyHitArray = enemy.randomMove();
            let potentialEnemyHit = registerHit(playerBoard, enemyHitArray);
            enemyHits += potentialEnemyHit
            shipDestroyed(playerShipList, enemyHitArray[2], "enemy");

            if (enemyHitArray[0]) {
                nextMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, enemyHitArray, playerHits, enemyHits);  
            };
        };
        enemyBoard.spaceElements[i].addEventListener("click", performMove);
    };
};

const nextMove = (enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, enemyHitArray, playerHits, enemyHits) => {
    let enemyBoard = enemyPositions.enemyBoard
    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        function newMove() {
            if (enemyHitArray[0]) {
                let coords = enemyBoard.spaceElements[i].id;
                let playerHitArray = newPlayer.move(coords);
                let potentialPlayerHit = registerHit(enemyBoard, playerHitArray);
                playerHits += potentialPlayerHit;
                shipDestroyed(enemyPositions.enemyShipList, coords, "player")
    
                let calculatedEnemyAttack = enemy.educatedGuess(enemyHitArray[2])
                let potentialEnemyHit = registerHit(playerBoard, calculatedEnemyAttack);
                enemyHits += potentialEnemyHit
                shipDestroyed(playerShipList, enemyHitArray[2], "enemy")
            } else {
                let score = yourMove(enemyBoard, playerBoard, playerShipList, enemy, newPlayer, registerHit);
                return score
            };
        };
        enemyBoard.spaceElements[i].addEventListener("click", newMove);
    };
};

export { registerHit, yourMove, nextMove }