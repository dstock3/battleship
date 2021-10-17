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
        let possibleMoves = []
        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            if (!spaceObj.isHit) {
                possibleMoves.push(spaceObj.coord);
            };
        };
        return possibleMoves
    }

    const randomMove = () => {
        let possibleMoves = determinePossibleMoves();

        let moveIndex = Math.floor(Math.random() * possibleMoves.length);
        
        let coords = possibleMoves[moveIndex];
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

        let possibleMoves = determinePossibleMoves();

        let newPossibleMoves = []
        
        for (let i = 0; i < possibleMoves.length; i++) {
            let possibleLetter = possibleMoves[i].charAt(0);
            let possibleCoordNum
            if (possibleMoves[i].charAt(2)) {
                let numString = possibleMoves[i].charAt(1) + possibleMoves[i].charAt(2);
                possibleCoordNum = parseInt(numString)
            } else {
                possibleCoordNum = parseInt(possibleMoves[i].charAt(1));
            };

            if (possibleLetter === prevCoordLetter) {
                if ((prevCoordNum === possibleCoordNum + 1) || (prevCoordNum === possibleCoordNum - 1)) {
                    newPossibleMoves.push(possibleMoves[i]);
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
        let prevLetterAttack = prevLetter + `${prevCoordNum}`
        let nextLetterAttack = nextLetter + `${prevCoordNum}`

        newPossibleMoves.push(prevLetterAttack, nextLetterAttack)
        console.log(newPossibleMoves)

        if (newPossibleMoves.length > 0) {
            let moveIndex = Math.floor(Math.random() * newPossibleMoves.length);
            let coords = newPossibleMoves[moveIndex]
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
