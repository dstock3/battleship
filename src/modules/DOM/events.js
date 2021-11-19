const registerHit = (playerBoard, hitArray) => {
    let hitResult = hitArray[0];
    let index = hitArray[1];
    let coord = hitArray[2];
    let boardCoord = playerBoard.spaceElements[index].id.replace(playerBoard.spaceElements[index].id.charAt(0),'');
    if (boardCoord === coord) {
        if (hitResult) {
            playerBoard.spaceElements[index].style.backgroundColor = "#a83244";
            playerBoard.spaceElements[index].classList.add("hit")
            return 1
        } else {
            playerBoard.spaceElements[index].classList.add("miss")
            playerBoard.spaceElements[index].textContent = "X";
            playerBoard.spaceElements[index].style.display = "flex";
            playerBoard.spaceElements[index].style.justifyContent = "center";
            playerBoard.spaceElements[index].style.alignItems = "center";
            playerBoard.spaceElements[index].style.fontSize = "3em";
            
            return 0
        };
    };
};

const shipDestroyed = (messageBox, shipList, coords, player) => {
    for (let i = 0; i < shipList.length; i++) {
        let ship = shipList[i];
        
        for (let y = 0; y < ship.coords.length; y++) {
            if (ship.coords[y] === coords) {
                for (let x = 0; x < ship.base.hitCount.length; x++) {
                    if (!ship.base.hitCount[x]) {
                        ship.base.hitCount[x] = true;

                        /*
                        if (ship.base.isSunk()) {
                            if (player === "player") {
                                messageBox.textContent = `You have sunk the enemy's ${ship.type}!`;
                                return true
                            } else if (player === "enemy") {
                                messageBox.textContent = `The enemy has sunk your ${ship.type}!`;
                                return true
                            };
                        } else {
                            return false
                        };
                        break  */ 
                    };
                };
                break
            };
        };
    };
};

const yourMove = (enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, enemyTarget, previousCoord, targetAgain = 0, calculatedHit = 0, targetAttempt = 0) => {
    let enemyBoard = enemyPositions.enemyBoard
    let messageBox = document.querySelector(".message-box");

    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        enemyBoard.spaceElements[i].style.cursor = "crosshair"
    };
    
    function reset(enemyBoard) {
        let master = document.querySelector(".master-container");
        let enemyBoardElement = document.getElementById("enemy");
        let newEnemyBoardElement = enemyBoardElement.cloneNode(true);
        enemyBoardElement.remove();        
        master.appendChild(newEnemyBoardElement)
        let spaceElements = document.getElementsByClassName("space")
        let spaceArray = Array.from(spaceElements);
        let spaceElementArray = [];
        for (let i = 0; i < spaceArray.length; i++) {
            if (spaceArray[i].id.charAt(0) === "e") {
                spaceElementArray.push(spaceArray[i]);
            };
        };
        enemyBoard.spaceElements = spaceElementArray;
    };

    for (let i = 0; i < enemyBoard.spaceElements.length; i++) {
        function performMove() {
            enemyBoard.spaceElements[i].style.cursor = "default"
            let coords = enemyBoard.spaceElements[i].id.replace(enemyBoard.spaceElements[i].id.charAt(0),'');;
            let playerHitArray = newPlayer.move(coords);
            let potentialPlayerHit = registerHit(enemyBoard, playerHitArray);
            playerHits += potentialPlayerHit;
            let result = shipDestroyed(messageBox, enemyPositions.enemyShipList, coords, "player");
            if (targetAgain) {
                enemyThought(playerHitArray[0], result, enemyTarget, targetAgain);
            } else if (calculatedHit) {
                enemyThought(playerHitArray[0], result, 0, calculatedHit);
            } else if (targetAttempt) {
                enemyThought(playerHitArray[0], result, 0, 0, targetAttempt);
            } else {
                enemyThought(playerHitArray[0], result, enemyTarget);
            }
            reset(enemyBoard);
        };

        if ((enemyBoard.spaceElements[i].textContent === "X") || (enemyBoard.spaceElements[i].classList.contains("hit"))) {
            enemyBoard.spaceElements[i].style.cursor = "default"
        } else {
            enemyBoard.spaceElements[i].addEventListener("click", performMove);
        };
    };

    function enemyThought(isHit, result, enemyTarget) {
        if ((isHit) && (!result)) {
            messageBox.textContent = "It's a Direct Hit!"
        } else if ((!result) || (!isHit)) {
            messageBox.textContent = "Shhh! The Enemy is Trying to Think."
        };
        
        let delayBase = Math.random() * (3 - 1) + 1;
        let delay = delayBase * 1000;

        const enemyHone = () => {
            enemyIsThinking(enemyTarget, previousCoord)
        }
        setTimeout(enemyHone, delay);
    }

    function enemyIsThinking(enemyTarget, previousCoord) {
        let enemyHitArray
        let strikeSuccess
        let newTargetAttempt
        let guessAfterMiss
        let priorCoord

        if (calculatedHit) {
            enemyHitArray =  enemy.surgicalStrike(previousCoord, calculatedHit);
            strikeSuccess = enemyHitArray[0];
            if (!strikeSuccess) {
                guessAfterMiss = true
                priorCoord = previousCoord;
            }
            
            console.log("Surgical Strike: " + enemyHitArray)
        } else if (targetAgain) {
            enemyHitArray =  enemy.educatedGuess(targetAgain);
            if (!enemyHitArray[0]) {
                guessAfterMiss = true
            } else {
                guessAfterMiss = false
            }
            priorCoord = targetAgain
            console.log("Educated Guess After Miss: " + enemyHitArray)
        } else if (targetAttempt) {
            enemyHitArray =  enemy.targetedStrike();
            console.log("Targeted Strike: " + enemyHitArray)
        } else if (enemyTarget) {
            enemyHitArray =  enemy.educatedGuess(previousCoord);
            console.log("Educated Guess: " + enemyHitArray)
        } else {
            enemyHitArray =  enemy.randomMove();
            if (!enemyHitArray[0]) {
                newTargetAttempt = true
            };
            console.log("Random Move: " + enemyHitArray)
        };

        let potentialHit = enemyHitArray[2];

        let isHit = enemyHitArray[0];
        let potentialEnemyHit = registerHit(playerBoard, enemyHitArray);
        enemyHits += potentialEnemyHit
        let result = shipDestroyed(messageBox, playerShipList.coords, enemyHitArray[2], "enemy");
        if ((!result) && (isHit)) { 
            messageBox.textContent = "You've Been Hit! Your Move." 
        } else if ((!result) || (!isHit)) {
            messageBox.textContent = "Your Move." 
        };

        if (playerHits === 17) {
            messageBox.textContent = "You Won!"
        } else if (enemyHits === 17) {
            messageBox.textContent = "You Have Been Defeated."
        };

        if ((enemyTarget) && (!isHit)) {
            yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, isHit, potentialHit, previousCoord)
        } else if (guessAfterMiss) {
            yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, isHit, potentialHit, priorCoord)
        } else if (((enemyTarget) && (isHit)) || (strikeSuccess)) {
            yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, isHit, potentialHit, 0, previousCoord)
        } else if (!guessAfterMiss) {
            yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, isHit, potentialHit, 0, priorCoord)
        } else if (newTargetAttempt) {
            yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, isHit, potentialHit, 0, 0, newTargetAttempt);
        } else {
            yourMove(enemyPositions, playerBoard, playerShipList, enemy, newPlayer, registerHit, playerHits, enemyHits, isHit, potentialHit);
        };        
    };
};


export { registerHit, yourMove }