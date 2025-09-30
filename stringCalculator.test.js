const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for empty string', () => {
    expect(calculator.add('')).toBe(0);
  });
  test('should return same number for a single number in the string', () => {
    expect(calculator.add('1')).toBe(1);
  });
  test("should return the sum of two numbers seperated by comma", () => {
  expect(calculator.add("1,5")).toBe(6);
  });
  test("handles any amount of numbers", () => {
  expect(calculator.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });


});