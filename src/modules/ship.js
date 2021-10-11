const Ship = (length, hitCount, status) => {
    const hit = (position) => {
        hitCount[position] = true;
    };

    const isSunk = () => hitCount.every((position) => position === true);

    const place = (coordinates) => {
        let newHitArray = [];
        for (let i = 0; i < hitCount.length; i++) {
            let hitObj = new Object();
            hitObj.coordinates =  coordinates[i];
            hitObj.isHit = hitCount[i];
            newHitArray.push(hitObj);
        }
        hitCount = newHitArray;
    }
    
    return { length, hitCount, status, hit, isSunk, place }
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