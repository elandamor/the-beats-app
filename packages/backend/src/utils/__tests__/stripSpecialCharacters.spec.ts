import { stripSpecialCharacters } from "../stripSpecialCharacters";

describe("stripSpecialCharacters", () => {
  it("should remove all special characters from a simple string", () => {
    const input = stripSpecialCharacters("A1 Beats - Jan'19");
    const expectedResult = "A1BeatsJan19";

    expect(input).toBe(expectedResult);
  });

  it("should remove all special characters from a complex string", () => {
    const input = stripSpecialCharacters("#A1_Beats - Jan(19)");
    const expectedResult = "A1BeatsJan19";

    expect(input).toBe(expectedResult);
  });
});
