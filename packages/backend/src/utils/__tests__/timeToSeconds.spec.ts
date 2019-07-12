import { timeToSeconds } from "../timeToSeconds";

describe("timeToSeconds", () => {
  it("should convert mm:ss to seconds", () => {
    const input = timeToSeconds("02:30");
    const expectedResult = 150;

    expect(input).toBe(expectedResult);
  });

  it("should convert hh:mm:ss to seconds", () => {
    const input = timeToSeconds("01:02:30");
    const expectedResult = 3750;

    expect(input).toBe(expectedResult);
  });
});
