import { shipMaker } from "./ship";

const testShip = shipMaker(3, [false, false, true], "active");

test('shipMaker returns an object with appropriate attributes', () => {
    expect(testShip.length).not.toBeNull;
    expect(testShip.hits).not.toBeNull;
    expect(testShip.status).not.toBeNull;
});

test('shipMaker object length is a number', () => {
    expect(typeof testShip.length).toBe("number");
});

test('hitposition attribute is an array containing boolean values', () => {
    let hits = testShip.hits
    for (let i = 0; i < hits.length; i++) {
        expect(typeof hits[i]).toBe("boolean");
    };
});