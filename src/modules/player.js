import { Gameboard } from './gameboard'

const Player = (boardObj) => {
    const move = (coords) => {
        boardObj.receiveAttack(coords);
    }

    return { move }
}

const computerPlayer = () => {
    const playerBoard = Gameboard();
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

    return { playerBoard, computer, randomMove }
}

export { Player, computerPlayer } 