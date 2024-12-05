import { isPositive } from "c/const";

describe("c-const", () => {
  it("should return true for positive numbers", () => {
    expect(isPositive(1)).toBe(true);
  });
});
