import { secondsToTime } from "../secondsToTime";

describe("secondsToTime", () => {
  it("should convert seconds to mm:ss", () => {
    const input = secondsToTime(150);
    const expectedResult = "02:30";

    expect(input).toBe(expectedResult);
  });

  it("should convert seconds to hh:mm:ss", () => {
    const input = secondsToTime(3750);
    const expectedResult = "01:02:30";

    expect(input).toBe(expectedResult);
  });
});
