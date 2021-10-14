const Player = (enemyBoard) => {
    const getHitResult = (enemyBoard, move) => {
        for (let i = 0; i < enemyBoard.newBoard.spaceArray.length; i++) {
            let spaceObj = enemyBoard.newBoard.spaceArray[i];
            if (move === spaceObj.coord) {
                if (spaceObj.isOccupied && spaceObj.isHit) {
                    if (enemyBoard.spaceElements[i].id === spaceObj.coord) {
                        return true
                    };
                };
    
                if ((spaceObj.isHit) && (!spaceObj.isOccupied)) {
                    return false
                };
            };
        };
    };
    
    const move = (coords) => {
        enemyBoard.receiveAttack(coords);
        let hitResult = getHitResult(enemyBoard, coords);

        return hitResult
    }

    return { move, enemyBoard }
}

const ComputerPlayer = (playerBoard) => {
    const computer = Player(playerBoard);

    const randomMove = () => {
        let possibleMoves = []
        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            if (!spaceObj.isHit) {
                possibleMoves.push(spaceObj.coord);
            };
        };
        
        let moveIndex = Math.floor(Math.random() * possibleMoves.length);
        let coords = possibleMoves[moveIndex]
        let hitResult = computer.move(playerBoard, coords);

        return hitResult;
    };

    return { randomMove, computer }
}

export { Player, ComputerPlayer } 
