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

    const generateRandomMove = () => {
        for (let i = 0; i < playerBoard.spaceArray.length; i++) {
            let spaceObj = playerBoard.spaceArray[i];
            spaceObj
    
        }
        return
    }

    return { playerBoard, computer }
}

export { Player } 
