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

        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            if (!spaceObj.isHit) {
                possibleMoves.push(spaceObj.coord);
            } else {
                excludedMoves.push(spaceObj.coord);
            };
        };

        return { possibleMoves, excludedMoves }
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
            let hitArray = computer.move(coords);
            return hitArray
        } else {
            let hitArray = randomMove();
            return hitArray
        };
    };

    return { randomMove, computer, educatedGuess }
}

export { Player, ComputerPlayer } 
