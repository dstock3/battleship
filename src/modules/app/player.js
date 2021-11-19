const Player = (enemyBoard) => {
    const getHitResult = (enemyBoard, move) => {
        for (let i = 0; i < enemyBoard.spaceArray.length; i++) {
            let spaceObj = enemyBoard.spaceArray[i];
            if (move === spaceObj.coord) {
                if (spaceObj.isOccupied && spaceObj.isHit) {
                    return [true, i, move]
                };
    
                if ((spaceObj.isHit) && (!spaceObj.isOccupied)) {
                    return [false, i, move]
                };
            };
        };
    };
    
    const move = (coords) => {
        enemyBoard.receiveAttack(coords);        
        let hitArray = getHitResult(enemyBoard, coords);

        return hitArray
    }

    return { move, enemyBoard }
}

const ComputerPlayer = (playerBoard) => {
    const computer = Player(playerBoard);

    function determinePossibleMoves() {
        let possibleMoves = [];
        let excludedMoves = [];
        let successfulMoves = [];

        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            if ((spaceObj.isHit) && (spaceObj.isOccupied)) {
                successfulMoves.push(spaceObj.coord)
            };
            if (!spaceObj.isHit) {
                possibleMoves.push(spaceObj.coord);
            } else {
                excludedMoves.push(spaceObj.coord);
            };
        };

        return { possibleMoves, excludedMoves, successfulMoves }
    }

    const randomMove = () => {
        let set = determinePossibleMoves();
        let moveIndex = Math.floor(Math.random() * set.possibleMoves.length);
        let coords = set.possibleMoves[moveIndex];
        let hitArray = computer.move(coords);

        return hitArray
    };

    const educatedGuess = (previousCoord) => {
        let prevCoordLetter = previousCoord.charAt(0);
            
        let prevCoordNum
        if (previousCoord.charAt(2)) {
            let numString = previousCoord.charAt(1) + previousCoord.charAt(2);
            prevCoordNum = parseInt(numString)
        } else {
            prevCoordNum = parseInt(previousCoord.charAt(1));
        };

        let set = determinePossibleMoves();

        let newPossibleMoves = []
        
        for (let i = 0; i < set.possibleMoves.length; i++) {
            let possibleLetter = set.possibleMoves[i].charAt(0);
            let possibleCoordNum
            if (set.possibleMoves[i].charAt(2)) {
                let numString = set.possibleMoves[i].charAt(1) + set.possibleMoves[i].charAt(2);
                possibleCoordNum = parseInt(numString)
            } else {
                possibleCoordNum = parseInt(set.possibleMoves[i].charAt(1));
            };

            if (possibleLetter === prevCoordLetter) {
                if ((prevCoordNum === possibleCoordNum + 1) || (prevCoordNum === possibleCoordNum - 1)) {
                    newPossibleMoves.push(set.possibleMoves[i]);
                };      
            };
        };
        let prevLetter
        let nextLetter 

        for (let y = 0; y < playerBoard.letterArray.length; y++) {
            if (prevCoordLetter === playerBoard.letterArray[y]) {
                prevLetter = playerBoard.letterArray[y - 1];
                nextLetter = playerBoard.letterArray[y + 1];
            };
        };
        if (prevLetter) {
            let prevLetterAttack = prevLetter + `${prevCoordNum}`
            newPossibleMoves.push(prevLetterAttack)
        }
        if (nextLetter) {
            let nextLetterAttack = nextLetter + `${prevCoordNum}`
            newPossibleMoves.push(nextLetterAttack)
        };

        if (newPossibleMoves.length > 0) {
            for (let i = 0; i < set.excludedMoves.length; i++) {
                for (let y = 0; y < newPossibleMoves.length; y++) {
                    if (set.excludedMoves[i] === newPossibleMoves[y]) {
                        newPossibleMoves.splice(y, 1)
                    };
                };
            };
            let moveIndex = Math.floor(Math.random() * newPossibleMoves.length);
            let coords = newPossibleMoves[moveIndex];
            if (coords) {
                let hitArray = computer.move(coords);
                return hitArray
            } else {
                let hitArray = targetedStrike();
                return hitArray
            };
        };
    };

    const targetedStrike = () => {
        let set = determinePossibleMoves();
        let targetingSystem = [];
        let eliminationProcess = [];
        let eliminationProcessTwo = [];

        if (set.successfulMoves.length > 0) {
            for (let y = 0; y < set.possibleMoves.length; y++) {
                for (let i = 0; i < set.successfulMoves.length; i++) {
                    if ((set.successfulMoves[i].charAt(0) === set.possibleMoves[y].charAt(0))) {
                        if (eliminationProcess.length > 0) {
                            for (let x = 0; x < eliminationProcess.length; x++) {
                                if (!eliminationProcess.includes(set.possibleMoves[y])) {
                                    eliminationProcess.push(set.possibleMoves[y])
                                };
                            };
                        } else {
                            eliminationProcess.push(set.possibleMoves[y]);
                        };
                    };
                };
            };
            
            for (let y = 0; y < set.possibleMoves.length; y++) {
                let possibleMoveNum
                if (set.possibleMoves[y].charAt(2)) {
                    possibleMoveNum = set.possibleMoves[y].charAt(1) + set.possibleMoves[y].charAt(2);
                } else {
                    possibleMoveNum = set.possibleMoves[y].charAt(1);
                };
                for (let i = 0; i < set.successfulMoves.length; i++) {
                    let successfulMoveNum
                    if (set.successfulMoves[i].charAt(2)) {
                        successfulMoveNum = set.successfulMoves[i].charAt(1) + set.successfulMoves[i].charAt(2);
                    } else {
                        successfulMoveNum = set.successfulMoves[i].charAt(1) 
                    };

                    if ((successfulMoveNum === possibleMoveNum)) {
                        if (eliminationProcessTwo.length > 0) {
                            for (let x = 0; x < eliminationProcessTwo.length; x++) {
                                if (!eliminationProcessTwo.includes(set.possibleMoves[y])) {
                                    eliminationProcessTwo.push(set.possibleMoves[y])
                                };
                            };
                        } else {
                            eliminationProcessTwo.push(set.possibleMoves[y]);
                        };
                    };
                };
            };

            for (let i = 0; i < set.successfulMoves.length; i++) {
                let successfulMoveNum
                if (set.successfulMoves[i].charAt(2)) {
                    successfulMoveNum = set.successfulMoves[i].charAt(1) + set.successfulMoves[i].charAt(2);
                } else {
                    successfulMoveNum = set.successfulMoves[i].charAt(1)
                }
                for (let x = 0; x < eliminationProcess.length; x++) {
                    let elimNum
                    if (eliminationProcess[x].charAt(2)) {
                        elimNum = eliminationProcess[x].charAt(1) + eliminationProcess[x].charAt(2);
                    } else {
                        elimNum = eliminationProcess[x].charAt(1);
                    }
                    if (!targetingSystem.includes(eliminationProcess[x])) {
                        if (parseInt(elimNum) === (parseInt(successfulMoveNum) + 1)) {
                            targetingSystem.push(eliminationProcess[x])
                        } else if (parseInt(elimNum) === (parseInt(successfulMoveNum) - 1)) {
                            targetingSystem.push(eliminationProcess[x])
                        };
                    };
                };
                
                for (let y = 0; y < playerBoard.letterArray.length; y++) {
                    if (set.successfulMoves[i].charAt(0) === playerBoard.letterArray[y]) {
                        let nextLetter = playerBoard.letterArray[y + 1];
                        let prevLetter = playerBoard.letterArray[y - 1];
                        if (eliminationProcessTwo.length > 0) {
                            for (let z = 0; z < eliminationProcessTwo.length; z++) {
                                if (!targetingSystem.includes(eliminationProcessTwo[z])) {
                                    if ((eliminationProcessTwo[z].charAt(0)) === nextLetter) {
                                        targetingSystem.push(eliminationProcessTwo[z])
                                    } else if ((eliminationProcessTwo[z].charAt(0)) === prevLetter) {
                                        targetingSystem.push(eliminationProcessTwo[z])
                                    };
                                };
                            };
                        };
                    };
                }; 
            };
    
            if ((targetingSystem.length > 0) && (targetingSystem.length < 45)) {
                let moveIndex = Math.floor(Math.random() * targetingSystem.length);
                let coords = targetingSystem[moveIndex];
                if (coords) {
                    let hitArray = computer.move(coords);
                    return hitArray
                };
            } else {
                let hitArray = educatedGuess(set.successfulMoves[0]);
                return hitArray
            };
        } else {
            let hitArray = randomMove();
            return hitArray
        };
    };

    const surgicalStrike = (coordOne, coordTwo) => {
        let coordOneLetter = coordOne.charAt(0);
        let coordTwoLetter = coordTwo.charAt(0);

        let coordOneNum
        if (coordOne.charAt(2)) {
            coordOneNum = coordOne.charAt(1) + coordOne.charAt(2);
        } else {
            coordOneNum = coordOne.charAt(1);
        };

        let coordTwoNum
        if (coordTwo.charAt(2)) {
            coordTwoNum = coordTwo.charAt(1) + coordTwo.charAt(2);
        } else {
            coordTwoNum = coordTwo.charAt(1);
        };

        let set = determinePossibleMoves();
        
        let conceivableMoves = []
        let newPossibleMoves = []

        if (coordOneLetter === coordTwoLetter) {
            for (let i = 0; i < set.possibleMoves.length; i++) {
                if (set.possibleMoves[i].charAt(0) === coordOneLetter) {
                    conceivableMoves.push(set.possibleMoves[i])
                };
            };

            for (let y = 0; y < conceivableMoves.length; y++) {
                let conceivableMoveNum
                if (conceivableMoves[y].charAt(2)) {
                    conceivableMoveNum = conceivableMoves[y].charAt(1) + conceivableMoves[y].charAt(2);
                } else {
                    conceivableMoveNum = conceivableMoves[y].charAt(1)
                };

                if (parseInt(conceivableMoveNum) === (parseInt(coordOneNum) + 1)) {
                    newPossibleMoves.push(conceivableMoves[y])
                } else if (parseInt(conceivableMoveNum) === (parseInt(coordOneNum) - 1)) {
                    newPossibleMoves.push(conceivableMoves[y])
                } else if (parseInt(conceivableMoveNum) === (parseInt(coordTwoNum) + 1)) {
                    newPossibleMoves.push(conceivableMoves[y])
                } else if (parseInt(conceivableMoveNum) === (parseInt(coordTwoNum) - 1)) {
                    newPossibleMoves.push(conceivableMoves[y])
                };
            };

        } else if (coordOneNum === coordTwoNum) {
            for (let i = 0; i < set.possibleMoves.length; i++) {
                let possibleMovesNum
                if (set.possibleMoves[i].charAt(2)) {
                    possibleMovesNum = set.possibleMoves[i].charAt(1) + set.possibleMoves[i].charAt(2);
                } else {
                    possibleMovesNum = set.possibleMoves[i].charAt(1)
                };
                if (possibleMovesNum === coordOneNum) {
                    conceivableMoves.push(set.possibleMoves[i])
                };
            };

            for (let x = 0; x < playerBoard.letterArray.length; x++) {
                if (coordOneLetter === playerBoard.letterArray[x]) {
                    for (let z = 0; z < conceivableMoves.length; z++) {
                        let conceivableMovesLetter = conceivableMoves[z].charAt(0);
                        if (conceivableMovesLetter === playerBoard.letterArray[x + 1]) {
                            newPossibleMoves.push(conceivableMoves[z])
                        } else if (conceivableMovesLetter === playerBoard.letterArray[x - 1]) {
                            newPossibleMoves.push(conceivableMoves[z])
                        };
                    };
                } else if (coordTwoLetter === playerBoard.letterArray[x]) {
                    for (let z = 0; z < conceivableMoves.length; z++) {
                        let conceivableMovesLetter = conceivableMoves[z].charAt(0);
                        if (conceivableMovesLetter === playerBoard.letterArray[x + 1]) {
                            newPossibleMoves.push(conceivableMoves[z])
                        } else if (conceivableMovesLetter === playerBoard.letterArray[x - 1]) {
                            newPossibleMoves.push(conceivableMoves[z])
                        };
                    };
                };
            };
        };

        if (newPossibleMoves.length > 0) {
            let moveIndex = Math.floor(Math.random() * newPossibleMoves.length);
            let coords = newPossibleMoves[moveIndex];
            let hitArray = computer.move(coords);
            return hitArray
        } else {
            let hitArray = educatedGuess(coordTwo);
            return hitArray
        };
    }

    return { randomMove, computer, targetedStrike, educatedGuess, surgicalStrike }
}

export { Player, ComputerPlayer } 
