const Ship = (length, hitCount, status) => {
    const hit = (position) => {
        hitCount[position] = true;
    };

    const isSunk = () => hitCount.every((position) => position === true);

    function updateStatus() {
        if (isSunk()) {
            this.status = "sunk"
        };
    };

    return { length, hitCount, status, hit, isSunk, updateStatus }
};

const shipSet = () => {
    const carrier = ["carrier", 5, [false, false, false, false, false], "active"];
    const battleship = ["battleship", 4, [false, false, false, false], "active"];
    const cruiser = ["cruiser", 3, [false, false, false], "active"];
    const submarine = ["submarine", 3, [false, false, false], "active"];
    const destroyer = ["destroyer", 2, [false, false], "active"];

    return { carrier, battleship, cruiser, submarine, destroyer }
};

export { Ship, shipSet }