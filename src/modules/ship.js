const Ship = (length, hitCount, status) => {
    const hit = (position) => {
        hitCount[position] = true;
    };

    const isSunk = () => hitCount.every((i) => i === true);
    
    return { length, hitCount, status, hit, isSunk }
};

export { Ship }