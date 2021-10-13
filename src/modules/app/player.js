const Player = (enemyBoard) => {
    const move = (coords) => {
        enemyBoard.receiveAttack(coords);
    }

    return { move }
}

const ComputerPlayer = (playerBoard) => {
    const computer = Player(playerBoard);

    const randomMove = () => {
        let possibleMoves = []
        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            if (!spaceObj.isHit) {
                possibleMoves.push(spaceObj.coord)
            };
        };
        
        let moveIndex = Math.floor(Math.random() * possibleMoves.length);

        computer.move(possibleMoves[moveIndex]);
        return(possibleMoves[moveIndex]);
    };

    return { randomMove }
}

export { Player, ComputerPlayer } 
