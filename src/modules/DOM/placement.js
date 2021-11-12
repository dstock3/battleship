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

const eliminateOccupiedPositions = (newPromptBoard, occupiedArray) => {
    let newSpaceElements = []
    let occupiedElements = []
    for (let i = 0; i < newPromptBoard.spaceElements.length; i++) {
        let space = newPromptBoard.spaceElements[i];
        for (let y = 0; y < occupiedArray.length; y++) {
            
            if (space.id === occupiedArray[y]) {
                space.classList.add("occupied");
            };
        };

        if (!space.classList.contains("occupied")){
            newSpaceElements.push(space)
        } else {
            occupiedElements.push(space)
            space.style.backgroundColor = "#0377fc";
        };
    };
    return [newSpaceElements, occupiedElements]
};

const persistOccupiedStatus = (promptBoard, occupiedArray) => {
    for (let i = 0; i < promptBoard.spaceElements.length; i++) {
        let space = promptBoard.spaceElements[i];
        if (space.classList.contains("occupied")){
            occupiedArray.push(space.id)
        };
        
    };
    return occupiedArray
};

const placeNewShip = (promptBoard, playerCoords, ship, occupiedArray) => {
    let shipName = ship[0];
    let length = ship[1];
    
    let orientation = "hor";
    let newOrientation
    let rotateButton = document.querySelector(".rotate");

    function rotate() {
        newOrientation = changeOrientation(orientation);
        if (newOrientation) {
            orientation = newOrientation
        };
    };

    rotateButton.addEventListener("click", rotate);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          rotate();
        };
    }, false);
    
    let newSpaceElements = eliminateOccupiedPositions(promptBoard, occupiedArray);
    let newSpaces = newSpaceElements[0];
    let occupiedSpaces = newSpaceElements[1];
    
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
            
            function offPositionSpec(assignNewPostion) {
                function offPosition() {
                    for (let i = 0; i < newSpaces.length; i++) {
                        for (let y = 0; y < positionElements.length; y++) {
                            if (newSpaces[i] === positionElements[y]) {
                                positionElements[y].style.backgroundColor = "#0377fc18";
                            };
                        };
                    };
                    space.removeEventListener("click", assignNewPostion);
                };
                space.addEventListener("mouseout", offPosition);
            }

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

                    let newCoords = [];

                    function assignVertPosition() {
                        for (let i = 0; i < length; i++) {
                            let coord = positionLetter + (positionNum + i);
                            newCoords.push(coord)
                        };
                        playerCoords[`${shipName}`] = newCoords;
                        let promptMessage = document.querySelector(".prompt-message");
                        promptMessage.remove();
                        let oldPrompt = document.querySelector(".prompt-container");
                        oldPrompt.remove();
                        let newPrompt = playerPrompt();
                        let newShip = newPrompt.promptBoard.newBoard.placeShip(ship, newCoords);
                        setSail(newPrompt.promptBoard, newShip);
                        let updatedArray = persistOccupiedStatus(newPrompt.promptBoard, occupiedArray);
                        checkPositions(playerCoords, newPrompt, updatedArray);
                    };
                    
                    space.addEventListener("click", assignVertPosition);
                    offPositionSpec(assignVertPosition);

                    for (let i = 0; i < positionElements.length; i++) {
                        for (let y = 0; y < occupiedSpaces.length; y++) {
                            if (occupiedSpaces[y] === positionElements[i]) {
                                for (let z = 0; z < positionElements.length; z++) {
                                    if (positionElements[z] === positionElements[i]) {
                                        positionElements[z].style.backgroundColor = "#0377fc";
                                    } else {
                                        positionElements[z].style.backgroundColor = "#0377fc18";
                                        for (let n = 0; n < occupiedSpaces.length; n++) {
                                            occupiedSpaces[n].style.backgroundColor = "#0377fc";
                                        };
                                        positionElements[z].style.cursor = "default";
                                        positionElements[z].removeEventListener("click", assignVertPosition);
                                    };
                                };
                            };
                        };
                    };
                } else {
                    for (let i = 0; i < length; i++) {
                        let newPositionNum = positionNum + i
                        let shipSpace = document.getElementById("c" + positionLetter + (newPositionNum));
                        positionElements.push(shipSpace)
                    };

                    for (let x = 0; x < positionElements.length; x++) {
                        let space = positionElements[x];
                        if (space) {
                            space.style.cursor = "default";
                        };
                    };
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

                            function assignHorPosition() {
                                playerCoords[`${shipName}`] = newCoords;
                                let promptMessage = document.querySelector(".prompt-message");
                                promptMessage.remove();
                                let oldPrompt = document.querySelector(".prompt-container");
                                oldPrompt.remove();
                                let newPrompt = playerPrompt();
                                let newShip = newPrompt.promptBoard.newBoard.placeShip(ship, newCoords);
                                setSail(newPrompt.promptBoard, newShip);
                                let updatedArray = persistOccupiedStatus(newPrompt.promptBoard, occupiedArray);
                                checkPositions(playerCoords, newPrompt, updatedArray);
                            };
            
                            space.addEventListener("click", assignHorPosition);
                            offPositionSpec(assignHorPosition);

                            for (let i = 0; i < positionElements.length; i++) {
                                for (let y = 0; y < occupiedSpaces.length; y++) {
                                    if (occupiedSpaces[y] === positionElements[i]) {
                                        for (let z = 0; z < positionElements.length; z++) {
                                            if (positionElements[z] === positionElements[i]) {
                                                positionElements[z].style.backgroundColor = "#0377fc";
                                            } else {
                                                positionElements[z].style.backgroundColor = "#0377fc18";
                                                for (let n = 0; n < occupiedSpaces.length; n++) {
                                                    occupiedSpaces[n].style.backgroundColor = "#0377fc";
                                                };
                                                positionElements[z].style.cursor = "default";
                                                positionElements[z].removeEventListener("click", assignHorPosition);
                                            };
                                        };
                                    };
                                };
                            };
                        } else {
                            for (let y = 0; y < length; y++) {
                                let newPositionLetter = letters[i + y]
                                let shipSpace = document.getElementById("c" + newPositionLetter + `${positionNum}`);
                                positionElements.push(shipSpace);
                            };
                            for (let x = 0; x < positionElements.length; x++) {
                                let space = positionElements[x];
                                if (space) {
                                    space.style.cursor = "default";
                                    
                                };
                            };
                        };
                    };
                };
            };
        };
        space.addEventListener("mouseover", choosePosition)
    };
};

const playerPrompt = () => {
    const masterContainer = document.getElementsByClassName("master-container")[0];
    const promptContainer = document.createElement("div");
    promptContainer.classList.add("prompt-container");
    masterContainer.appendChild(promptContainer);
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

    body.style.backgroundColor = "#001f4265";
    let childElements = Array.from(masterContainer.children)
    for (let i = 0; i < childElements.length; i++) {
        let child = childElements[i]
        if (child.classList[0] !== "prompt-container") {
            child.style.backgroundColor = "#001f4265";
            child.style.opacity = "25%";
        } else {
            child.style.opacity = "100%";
        }
    };

    return { promptContainer, promptBoard, rotateShip, promptMessage, childElements, positionDisplay }
};

const playerShipPlacement = (newCoords) => {
    const playerBattleship = playerBoard.newBoard.placeShip(ships.battleship, newCoords.battleship);
    const playerCruiser = playerBoard.newBoard.placeShip(ships.cruiser, newCoords.cruiser);
    const playerCarrier = playerBoard.newBoard.placeShip(ships.carrier, newCoords.carrier);
    const playerSubmarine = playerBoard.newBoard.placeShip(ships.submarine,  newCoords.submarine);
    const playerDestroyer = playerBoard.newBoard.placeShip(ships.destroyer, newCoords.destroyer);
    const playerShipList = [playerBattleship, playerCruiser, playerCarrier, playerSubmarine, playerDestroyer];
    
    for (let i = 0; i < playerShipList.length; i++) {
        setSail(playerBoard, playerShipList[i])
    };
}

function checkPositions(newCoords, placementPrompt, occupiedArray) {
    if (!(newCoords.hasOwnProperty('carrier'))) {
        placeNewShip(placementPrompt.promptBoard, newCoords, ships.carrier, occupiedArray);
        placementPrompt.promptMessage.textContent = "Place your Carrier!";
    } else if (!(newCoords.hasOwnProperty('battleship'))) {
        placeNewShip(placementPrompt.promptBoard, newCoords, ships.battleship, occupiedArray);
        placementPrompt.promptMessage.textContent = "Place your Battleship!";
    } else if (!(newCoords.hasOwnProperty('cruiser'))) {
        placeNewShip(placementPrompt.promptBoard, newCoords, ships.cruiser, occupiedArray);
        placementPrompt.promptMessage.textContent = "Place your Cruiser!";
    } else if (!(newCoords.hasOwnProperty('submarine'))) {
        placeNewShip(placementPrompt.promptBoard, newCoords, ships.submarine, occupiedArray);
        placementPrompt.promptMessage.textContent = "Place your Submarine!";
    } else if (!(newCoords.hasOwnProperty('destroyer'))) {
        placeNewShip(placementPrompt.promptBoard, newCoords, ships.destroyer, occupiedArray);
        placementPrompt.promptMessage.textContent = "Place your Destroyer!";
    } else if ((newCoords.hasOwnProperty('carrier')) &&
    (newCoords.hasOwnProperty('battleship')) && 
    (newCoords.hasOwnProperty('cruiser')) && 
    (newCoords.hasOwnProperty('submarine')) && 
    (newCoords.hasOwnProperty('destroyer'))) {
        playerShipPlacement(newCoords);
        let oldPrompt = document.querySelector(".prompt-container");
        oldPrompt.remove();
        let promptMessage = document.querySelector(".prompt-message");
        promptMessage.remove();
        body.style.backgroundColor = "#e4e4e4";
        let masterContainer = document.getElementsByClassName("master-container")[0];
        let childElements = Array.from(masterContainer.children)
        for (let i = 0; i < childElements.length; i++) {
            let child = childElements[i]
            if (child.classList[0] !== "prompt-container") {
                child.style.backgroundColor = "#e4e4e4";
                child.style.opacity = "100%";
            };
        };
    };
};

const placement = () => {
    let placementPrompt = playerPrompt();
    let playerCoords = {};
    let occupiedArray = [];
    checkPositions(playerCoords, placementPrompt, occupiedArray)
};

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
        setSail(enemyBoard, enemyShipList[i])
    }*/

    return { enemyBoard, enemyShipList, checkShipStatus }
})();

export { enemyPositions, playerBoard, placement }
