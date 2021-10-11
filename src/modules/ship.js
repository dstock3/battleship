const shipMaker = (length, hits, status) => {
    const hit = (position) => {
        hits[position] = true;
    };

    const isSunk = () => {
        let check = 0;

        for (let i = 0; i < hits.length; i++) {
            if (hits[i] === true) {
                check += 1;
            };
        };

        if (check === length) {
            status = "sunk"
        } else {
            status = "active"
        };
    };

    return { length, hits, status, hit, isSunk }
};

export { shipMaker }