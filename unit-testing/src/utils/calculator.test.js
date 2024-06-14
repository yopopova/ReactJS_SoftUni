import * as calculator from './calculator';

// USING JEST FOR UNIT TESTING
// npm start for start
// Ctrl + C for stop

describe('Calculator Sum', () => {
    // Using .only, if we want to execute only this test
    // Using .skip, if we don't want to execute the test

    // FIRST WAY
    test('Sum of positive numbers should be positive', () => {
        // Arrange
        const first = 1;
        const second = 2;
        const expectedResult = 3;

        // Act
        const actualResult = calculator.sum(first, second);

        // Assert
        expect(actualResult).toBe(expectedResult);
    });

    // SECOND WAY
    // it('Should return negative number when adding negative numbers', () => {
    //     expect(calculator.sum(-1, -2)).toBe(-3);
    // });

    test('Use undefined as an argument should return NaN', () => {
        expect(calculator.sum(undefined, 2)).toBe(NaN);
    });

    test('Use string as an argument should return number', () => {
        expect(calculator.sum('1', 2)).toBe(3);
    });
});

describe('Calculator Divide', () => {

    // When we expect to throw error, we should make it like function
    test('Should throw error when divide by zero', () => {
        expect(() => calculator.divide(2, 0)).toThrow('Division by 0 is not permited.');
    });
});