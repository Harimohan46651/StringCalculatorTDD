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
  test("handles new lines between numbers", () => {
  expect(calculator.add("1\n2,3")).toBe(6);
  });
  test("supports different delimiters", () => {
  expect(calculator.add("//;\n1;2")).toBe(3);
  });
  test("should throw exception on negative numbers", () => {
  expect(() => calculator.add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
  });
  test("ignores numbers greater than 1000", () => {
  expect(calculator.add("2,1001")).toBe(2);
  expect(calculator.add("1000,2")).toBe(1002);
  });
  test("supports delimiters of any length", () => {
  expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });
  test("supports multiple delimiters", () => {
  expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
  });
  test("supports mixed length delimiters", () => {
  expect(calculator.add("//[foo][!!]\n1foo2!!3")).toBe(6);
  });

});