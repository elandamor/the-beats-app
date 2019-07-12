import { getDuration } from "../getDuration";

describe("getDuration", () => {
  it("should get a track's duration", () => {
    const track = {
      id: "cjxvN3nzt11ep0b530xt345vy",
      duration: 218,
      explicit: false,
      genre: "Dance",
      isPlayable: true,
      name: "Lie To Me",
      trackNumber: 1,
      createdAt: null,
      updatedAt: null
    };
    const input = getDuration(track);
    const expectedResult = 218;

    expect(input).toBe(expectedResult);
  });

  it("should get duration for collection of tracks", () => {
    const tracks = [
      {
        id: "cjxvN3nzt11ep0b530xt345vy",
        duration: 218,
        explicit: false,
        genre: "Dance",
        isPlayable: true,
        name: "Lie To Me",
        trackNumber: 1,
        createdAt: null,
        updatedAt: null
      },
      {
        id: "cjxvN3nzt11ep0b530xt345vy",
        duration: 332,
        explicit: false,
        genre: "Dance",
        isPlayable: true,
        name: "Azukita",
        trackNumber: 2,
        createdAt: null,
        updatedAt: null
      }
    ];
    const input = getDuration(tracks);
    const expectedResult = 550;

    expect(input).toBe(expectedResult);
  });
});
