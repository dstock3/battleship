import { shipMaker } from "./ship";

const testShip = shipMaker(3, "no hits", "active");

test('shipMaker returns an object with appropriate attributes', () => {
    expect(testShip.length).not.toBeNull;
    expect(testShip.hitposition).not.toBeNull;
    expect(testShip.status).not.toBeNull;
});

test('shipMaker object length is a number', () => {
    expect(typeof testShip.length).toBe("number");
});