/**
 * @jest-environment jsdom
 */


import { Ship } from "./ship";

const testShip = Ship(3, [false, false, false], "active");

test('shipMaker returns an object with appropriate attributes', () => {
    expect(testShip.length).not.toBeNull;
    expect(testShip.hitCount).not.toBeNull;
    expect(testShip.status).not.toBeNull;
});

test('shipMaker object length is a number', () => {
    expect(typeof testShip.length).toBe("number");
});

test('hitposition attribute is an array containing boolean values', () => {
    let hits = testShip.hitCount
    for (let i = 0; i < hits.length; i++) {
        expect(typeof hits[i]).toBe("boolean");
    };
});

test("hit method works", () => {
    testShip.hit(0);
    expect(testShip.hitCount[0]).toBe(true);
});

test("isSunk method returns false when at least one position is not hit", () => {
    for (let i = 2; i < testShip.hitCount.length; i++) {
        testShip.hit(i);
    }
    expect(testShip.isSunk()).toBe(false);
});

test("isSunk method returns true in appropriate context", () => {
    for (let i = 0; i < testShip.hitCount.length; i++) {
        testShip.hit(i);
    }
    expect(testShip.isSunk()).toBe(true);
});