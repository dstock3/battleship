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
        let possibleMoves = determinePossibleMoves();

        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            if (spaceObj.coord.charAt(0) === previousCoord.charAt(0)) {
                let num
                if (previousCoord.charAt(2)) {
                    let numString = previousCoord.charAt(1) + previousCoord.charAt(2);
                    num = parseInt(numString)
                } else {
                    num = parseInt(previousCoord.charAt(1));
                };

                for (let y = 0; y < possibleMoves.length; y++) {
                    let coords = possibleMoves[y];
                    if (possibleMoves[y].charAt(1) === num + 1) {
                        let hitArray = computer.move(coords);
                        return hitArray
                    } else if (possibleMoves[y].charAt(1) === num - 1) {
                        let hitArray = computer.move(coords);
                        return hitArray
                    } else {
                        let hitArray = randomMove();
                        return hitArray
                    };
                };
            };
        };
    };

    return { randomMove, computer }
}

export { Player, ComputerPlayer } 
