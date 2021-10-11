const shipMaker = (length, hits, status) => {
    const hit = (position) => {
        hits[position] = true
    };

    const isSunk = () => {
        let allEqual = arr => arr.every( v => v === arr[0] );
        let values = allEqual(hits);

        if (values) {
            if (hits[0] === true) {
                status = "sunk"
            };
        };
    };

    return { length, hits, status, hit, isSunk }
};

export { shipMaker }