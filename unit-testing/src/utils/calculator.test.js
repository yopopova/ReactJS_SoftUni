import * as calculator from './calculator';

test('sum of positive numbers should be positive', () => {
    // Arrange
    const first = 1;
    const second = 2;
    const expectedResult = 3;

    // Act
    const actualResult =calculator.sum(first, second); 

    // Assert
    expect(actualResult).toBe(expectedResult);
})