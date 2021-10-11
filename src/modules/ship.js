const Ship = (length, hitCount, status) => {
    const hit = (position) => {
        hitCount[position] = true;
    };

    const isSunk = () => hitCount.every((position) => position === true);

    return { length, hitCount, status, hit, isSunk }
};

const shipSet = () => {
    const carrier = Ship(5, [false, false, false, false, false], "active");
    const battleship = Ship(4, [false, false, false, false], "active");
    const cruiser = Ship(3, [false, false, false], "active");
    const submarine = Ship(3, [false, false, false], "active");
    const destroyer = Ship(2, [false, false], "active");

    return { carrier, battleship, cruiser, submarine, destroyer }
};



export { Ship, shipSet }