import { add } from "../src/stringCalculator.js";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//-\n2-4-6")).toBe(12);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed: -1, -3");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(add("2,1001,6")).toBe(8);
  });

  test("should support multi-character delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("should support multiple delimiters of length equal to 2", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should support multiple delimiters of length greater than 2", () => {
    expect(add("//[*][%][-]\n1*2%3-5")).toBe(11);
  });

  test("should support multiple delimiters with multiple characters", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  test("should support multiple delimiters of different lengths with different characters", () => {
    expect(add("//[*][%%%][--]\n1*2%%%3--5")).toBe(11);
  });
});
