import { body, masterContainer, boardGen } from '../DOM/boardElements';
import { shipSet } from '../app/ship';

const playerBoard = boardGen("player", masterContainer);

const ships = shipSet();

const setSail = (ship) => {
    const spaces = Array.from(document.getElementsByClassName("space"));
    for (let i = 0; i < ship.coords.length; i++) {
        for (let y = 0; y < spaces.length; y++) {
            if (ship.coords[i] === spaces[y].id) {
                spaces[y].style.backgroundColor = "#0377fc";
                spaces[y].classList.add("occupied");
            };
        };
    };
};

const playerPrompt = () => {
    const promptContainer = document.createElement("div");
    promptContainer.classList.add("prompt-container");
    body.appendChild(promptContainer);
    const promptBoard = boardGen("choose", promptContainer);
    promptContainer.style.backgroundColor = "#b2d1f5"

    const promptMessage = document.createElement("div");
    promptMessage.classList.add("prompt-message");
    body.appendChild(promptMessage);
    promptMessage.textContent = "Choose Your Positions!"

    body.style.backgroundColor = "#001f4265"
    let childElements = Array.from(body.children)
    for (let i = 0; i < childElements.length; i++) {
        let child = childElements[i]
        if (child.classList[0] !== "prompt-container") {
            child.style.opacity = "100%"
        };
        if (child.classList[0] === "master-container") {
            child.style.opacity = "25%"
        };
    };

    let coordArray = [];

    const placeNewShip = (shipArray, orientation) => {
        let length = shipArray[1];

        for (let i = 0; i < promptBoard.spaceElements.length; i++) {
            let space = promptBoard.spaceElements[i]
            let position = space.id.replace(space.id.charAt(0), '');
            let positionLetter = position.charAt(0)
            let positionNum
            if (position.charAt(2)) {
                let numString = position.charAt(1) + position.charAt(2);
                positionNum = parseInt(numString)
            } else {
                positionNum = parseInt(position.charAt(1));
            };
            
            function choosePosition() {
                let positionElements = []
                if (orientation === "vert") {
                    if (positionNum < 7) {
                        for (let i = 0; i < length; i++) {
                            let newPositionNum = positionNum + i
                            let shipSpace = document.getElementById("c" + positionLetter + (newPositionNum));
                            positionElements.push(shipSpace)
                            shipSpace.style.backgroundColor = "#0377fc";
                        };
                        for (let i = 0; i < positionElements.length; i++) {
                            positionElements[i].style.backgroundColor = "#0377fc";
                        };
                    };
                };


                
                
                let coords = []
                function assignPosition() {
                    for (let i = 0; i < length; i++) {
                        let coord = positionLetter + (positionNum + i);
                        coords.push(coord)
                    };
                    return coords
                };
                space.addEventListener("click", function() {
                    let newCoords = assignPosition();
                    coordArray.push(newCoords)
                    console.log(newCoords)
                });



                function offPosition() {
                    for (let i = 0; i < positionElements.length; i++) {
                        positionElements[i].style.backgroundColor = "#0377fc18";
                    };
                };
                space.addEventListener("mouseout", offPosition)
            }
            space.addEventListener("mouseover", choosePosition)
        }

        return coords
    }

    
    for (let prop in ships) {
        console.log(ships[prop])
        let ship = placeNewShip(ships[prop], "vert")
        coordArray.push(ship)
    }

    return coordArray
}

const playerShipPlacement = (newCoords) => {

    const playerBattleship = playerBoard.newBoard.placeShip(ships.battleship, newCoords[0]);
    const playerCruiser = playerBoard.newBoard.placeShip(ships.cruiser, newCoords[1]);
    const playerCarrier = playerBoard.newBoard.placeShip(ships.carrier, newCoords[2]);
    const playerSubmarine = playerBoard.newBoard.placeShip(ships.submarine,  newCoords[3]);
    const playerDestroyer = playerBoard.newBoard.placeShip(ships.destroyer, newCoords[4]);
    const playerShipList = [playerBattleship, playerCruiser, playerCarrier, playerSubmarine, playerDestroyer];
    
    for (let i = 0; i < playerShipList.length; i++) {
        setSail(playerShipList[i])
    };
}

/*
const playerBattleship = playerBoard.newBoard.placeShip(ships.battleship, ["A1", "A2", "A3", "A4"]);
const playerCruiser = playerBoard.newBoard.placeShip(ships.cruiser, ["C5", "C6", "C7"]);
const playerCarrier = playerBoard.newBoard.placeShip(ships.carrier, ["D2", "E2", "F2", "G2", "H2"]);
const playerSubmarine = playerBoard.newBoard.placeShip(ships.submarine, ["F10", "F9", "F8"]);
const playerDestroyer = playerBoard.newBoard.placeShip(ships.destroyer, ["H7", "H6"]);
const playerShipList = [playerBattleship, playerCruiser, playerCarrier, playerSubmarine, playerDestroyer];

for (let i = 0; i < playerShipList.length; i++) {
    setSail(playerShipList[i])
}
*/

const enemyPositions = (() => {
    const enemyBoard = boardGen("enemy", masterContainer);
    const enemyPositions = enemyBoard.newBoard.assignPositions();

    const enemyCarrier = enemyBoard.newBoard.placeShip(ships.carrier, enemyPositions[0]);
    const enemyBattleship = enemyBoard.newBoard.placeShip(ships.battleship, enemyPositions[1]);
    const enemyCruiser = enemyBoard.newBoard.placeShip(ships.cruiser, enemyPositions[2]);
    const enemySubmarine = enemyBoard.newBoard.placeShip(ships.submarine, enemyPositions[3]);
    const enemyDestroyer = enemyBoard.newBoard.placeShip(ships.destroyer, enemyPositions[4]);

    const enemyShipList = [enemyBattleship, enemyCruiser, enemyCarrier, enemySubmarine, enemyDestroyer];
    
    function checkShipStatus() {
        for (let i = 0; i < enemyShipList.length; i++) {
            let ship = enemyShipList[i];
            ship.base.updateStatus();
            console.log(ship.base.status)
            if (ship.base.status === "sunk") {
                return ship.type
            }
        };
    };
    
    /*
    for (let i = 0; i < enemyShipList.length; i++) {
        setSail(enemyShipList[i])
    }*/

    return { enemyBoard, enemyShipList, checkShipStatus }
})();

export { enemyPositions, /* playerBoard, playerShipList,*/ playerPrompt }
