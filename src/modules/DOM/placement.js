import { body, masterContainer, boardGen } from '../DOM/boardElements';
import { shipSet } from '../app/ship';

const playerBoard = boardGen("player", masterContainer);

const ships = shipSet();

const setSail = (board, ship) => {
    for (let i = 0; i < ship.coords.length; i++) {
        for (let y = 0; y < board.spaceElements.length; y++) {
            let elementCoord = board.spaceElements[y].id.replace(board.spaceElements[y].id.charAt(0), '');
            if (ship.coords[i] === elementCoord) {
                board.spaceElements[y].style.backgroundColor = "#0377fc";
                board.spaceElements[y].classList.add("occupied");
            };
        };
    };
};

const changeOrientation = (orientation) => {
    if (orientation === "vert") {
        return "hor"
    };

    if (orientation === "hor") {
        return "vert"
    };
};

const addPointer = (element) => {
    element.style.cursor = "pointer"
};

const eliminateOccupiedPositions = (newPromptBoard) => {
    let newSpaceElements = []
    let occupiedElements = []
    for (let i = 0; i < newPromptBoard.spaceElements.length; i++) {
        let space = newPromptBoard.spaceElements[i];
        if (!space.classList.contains("occupied")){
            newSpaceElements.push(space)
        } else {
            occupiedElements.push(space)
            space.style.backgroundColor = "#0377fc";
        };
    };
    return [newSpaceElements, occupiedElements]
};

const placeNewShip = (promptBoard, length, orientation) => {
    let coordArray = [];    

    let newOrientation
    let rotateButton = document.querySelector(".rotate");
    rotateButton.addEventListener("click", function() {
        newOrientation = changeOrientation(orientation);
        if (newOrientation) {
            orientation = newOrientation
        };
    });
    
    let newSpaceElements = eliminateOccupiedPositions(promptBoard)
    let newSpaces = newSpaceElements[0]
    console.log(newSpaces)
    let occupiedSpaces = newSpaceElements[1]
    
    
    for (let i = 0; i < newSpaces.length; i++) {
        let space = newSpaces[i];
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
            let newDisplay = document.querySelector(".position-display");
            newDisplay.textContent = position
            addPointer(space);
            let positionElements = []
            if (orientation === "vert") {
                let breakPoint
                if (length == 5) {
                    breakPoint = 7
                };
                if (length == 4) {
                    breakPoint = 8
                };
                if (length == 3) {
                    breakPoint = 9
                };
                if (length == 2) {
                    breakPoint = 10
                };

                if (positionNum < breakPoint) {
                    for (let i = 0; i < length; i++) {
                        let newPositionNum = positionNum + i
                        let shipSpace = document.getElementById("c" + positionLetter + (newPositionNum));
                        positionElements.push(shipSpace)
                        shipSpace.style.backgroundColor = "#0377fc";
                    };
                    for (let i = 0; i < positionElements.length; i++) {
                        positionElements[i].style.backgroundColor = "#0377fc";
                    };

                    let coords = [];

                    function assignVertPosition() {
                        for (let i = 0; i < length; i++) {
                            let coord = positionLetter + (positionNum + i);
                            coords.push(coord)
                        };
                        return coords
                    };

                    space.addEventListener("click", function() {
                        let newCoords = assignVertPosition();
                        let oldPrompt = document.querySelector(".prompt-container");
                        oldPrompt.remove();
                        let newPrompt = playerPrompt();
                        let playerBattleship = newPrompt.promptBoard.newBoard.placeShip(ships.battleship, newCoords);
                        setSail(newPrompt.promptBoard, playerBattleship)
                        placeNewShip(newPrompt.promptBoard, 4, "hor")
                        
                    });
                };
            };
            
            if (orientation === "hor") {
                let letters = promptBoard.newBoard.letterArray;

                let breakPoint
                if (length == 5) {
                    breakPoint = 6
                };
                if (length == 4) {
                    breakPoint = 7
                };
                if (length == 3) {
                    breakPoint = 8
                };
                if (length == 2) {
                    breakPoint = 9
                };
                let newCoords = []
                for (let i = 0; i < letters.length; i++) {
                    if (positionLetter === letters[i]) {
                        
                        if (i < breakPoint) {
                            for (let y = 0; y < length; y++) {
                                let newPositionLetter = letters[i + y]
                                let shipSpace = document.getElementById("c" + newPositionLetter + `${positionNum}`);
                                positionElements.push(shipSpace)
                                let coord = newPositionLetter + `${positionNum}`
                                newCoords.push(coord)
                                shipSpace.style.backgroundColor = "#0377fc";
                            };
                            
                        };
                    };
                };

                function assignHorPosition() {
                    return newCoords
                };

                space.addEventListener("click", function() {
                    let newCoords = assignHorPosition();
                    return newCoords
                });
            };
            
            function offPosition() {
                for (let i = 0; i < positionElements.length; i++) {
                    positionElements[i].style.backgroundColor = "#0377fc18";
                };
            };
            space.addEventListener("mouseout", offPosition)
        };
        space.addEventListener("mouseover", choosePosition)
    };
};



/*
for (let prop in ships) {
    console.log(ships[prop])
    let ship = placeNewShip(ships[prop][1], "hor");
    setSail(promptBoard, ship)
    coordArray.push(ship)
}
*/

const playerPrompt = () => {
    const promptContainer = document.createElement("div");
    promptContainer.classList.add("prompt-container");
    body.appendChild(promptContainer);
    const promptBoard = boardGen("choose", promptContainer);
    promptContainer.style.backgroundColor = "#b2d1f5";
    promptBoard.outerBoard.id = "prompt-frame";
    promptBoard.boardContainer.id = "prompt-container";

    const controls = document.createElement("div");
    controls.classList.add("controls");
    promptBoard.outerBoard.appendChild(controls);

    const rotateShip = document.createElement("div");
    rotateShip.classList.add("rotate");
    rotateShip.textContent = "Rotate Ship";
    controls.appendChild(rotateShip);

    const positionDisplay = document.createElement("div");
    positionDisplay.classList.add("position-display");
    positionDisplay.textContent = "A1"
    controls.appendChild(positionDisplay);

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

    return { promptContainer, promptBoard, rotateShip, childElements, positionDisplay }
};

const playerShipPlacement = (newCoords) => {

    const playerBattleship = playerBoard.newBoard.placeShip(ships.battleship, newCoords[0]);
    const playerCruiser = playerBoard.newBoard.placeShip(ships.cruiser, newCoords[1]);
    const playerCarrier = playerBoard.newBoard.placeShip(ships.carrier, newCoords[2]);
    const playerSubmarine = playerBoard.newBoard.placeShip(ships.submarine,  newCoords[3]);
    const playerDestroyer = playerBoard.newBoard.placeShip(ships.destroyer, newCoords[4]);
    const playerShipList = [playerBattleship, playerCruiser, playerCarrier, playerSubmarine, playerDestroyer];
    
    for (let i = 0; i < playerShipList.length; i++) {
        setSail(playerShipList[i], "p")
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

export { enemyPositions, /* playerBoard, playerShipList,*/ ships, playerPrompt, placeNewShip }
