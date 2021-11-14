const registerHit = (playerBoard, hitArray) => {
    let hitResult = hitArray[0];
    let index = hitArray[1];
    let coord = hitArray[2];
    let boardCoord = playerBoard.spaceElements[index].id.replace(playerBoard.spaceElements[index].id.charAt(0),'');
    if (boardCoord === coord) {
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

const shipDestroyed = (messageBox, shipList, coords, player) => {
    console.log(shipList, coords, player)
    for (let i = 0; i < shipList.length; i++) {
        let ship = shipList[i];
        
        for (let y = 0; y < ship.coords.length; y++) {
            if (ship.coords[y] === coords) {
                for (let x = 0; x < ship.base.hitCount.length; x++) {
                    if (!ship.base.hitCount[x]) {
                        ship.base.hitCount[x] = true;

                        if (ship.base.isSunk()) {
                            if (player === "player") {
                                messageBox.textContent = `You have sunk the enemy's ${ship.type}!`;
                                return true
                            } else {
                                messageBox.textContent = `The enemy has sunk your ${ship.type}!`;
                                return true
                            };
                        } else {
                            return false
                        };
                    };
                };
            };
        };
    };
};

const yourMove = (enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits) => {
    let enemyBoard = enemyPositions.enemyBoard
    let messageBox = document.querySelector(".message-box");

    function enemyThought(hit, result) {
        if ((hit) && (!result)) {
            messageBox.textContent = "It's a Direct Hit!"
        } else if ((!result) || (!hit)) {
            messageBox.textContent = "Shhh! The Enemy is Trying to Think."
        };
        
        let delayBase = Math.random() * (3 - 1) + 1;
        let delay = delayBase * 1000;
        setTimeout(enemyIsThinking, delay);
    }

    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        function performMove() {
            
            let coords = enemyBoard.spaceElements[i].id.replace(enemyBoard.spaceElements[i].id.charAt(0),'');;
            let playerHitArray = newPlayer.move(coords);
            let potentialPlayerHit = registerHit(enemyBoard, playerHitArray);
            playerHits += potentialPlayerHit;
            let result = shipDestroyed(messageBox, enemyPositions.enemyShipList, coords, "player");

            enemyThought(playerHitArray[0], result);
        };
        enemyBoard.spaceElements[i].addEventListener("click", performMove);
    };

    function enemyIsThinking() {
        let enemyHitArray =  enemy.randomMove();
        if (enemyHitArray[0]) { 
            messageBox.textContent = "You've Been Hit! Your Move." 
        } else {
            messageBox.textContent = "Your Move." 
        };

        let potentialEnemyHit = registerHit(playerBoard, enemyHitArray);
        enemyHits += potentialEnemyHit
        shipDestroyed(messageBox, playerShipList, enemyHitArray[2], "enemy");
        
        console.log("Player Hits: " + playerHits)
        console.log("Enemy Hits: " + enemyHits)

        if ((playerHits === 17) || (enemyHits === 17)) {
            console.log("game over")
        }

        if (enemyHitArray[0]) {
            //removeListener(enemyBoard, performMove)
            //nextMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, enemyHitArray, playerHits, enemyHits);  
        };
        
    };
};


export { registerHit, yourMove }