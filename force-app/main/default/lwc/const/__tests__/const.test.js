import { isPositive } from "c/const";

describe("c-const", () => {
  it("should return true for positive numbers", () => {
    expect(isPositive(1)).toBe(true);
  });

  it("should return false for negative numbers", () => {
    expect(isPositive(-1)).toBe(false);
  });

  it("should return false for zero", () => {
    expect(isPositive(0)).toBe(false);
  });
});

// describe("parameterized tests", () => {
//   it.each([
//     { value: 1, result: true, describe: "positive numbers" },
//     { value: -1, result: false, describe: "negative numbers" },
//     { value: 0, result: false, describe: "zero" }
//   ])("should return $result for $describe", ({ value, result }) => {
//     expect(isPositive(value)).toBe(result);
//   });
// });
