import { stripSpecialCharacters } from "../stripSpecialCharacters";

describe("stripSpecialCharacters", () => {
  it("removes all special characters from a string", () => {
    const input = stripSpecialCharacters("A1 Beats - Jan'19");
    const expectedResult = "A1BeatsJan19";

    expect(input).toBe(expectedResult);
  });
});
