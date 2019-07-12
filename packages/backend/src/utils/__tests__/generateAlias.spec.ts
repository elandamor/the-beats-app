import { generateAlias } from "../generateAlias";

const userId = "cjxvN3nzt11ep0b530xt345vy";

describe("generateAlias", () => {
  it("generates correct album alias", () => {
    const album = {
      artists: [{ id: "cjxvN3nzt11ep0b530xt345vy" }, { name: "Khalid" }],
      name: "Beautiful People",
      releaseType: "SINGLE"
    };
    const input = generateAlias(album.name, {
      suffix: album.releaseType
    });
    const expectedResult = `beautifulpeople:SINGLE`;

    expect(input).toBe(expectedResult);
  });

  it("generates correct playlist alias", () => {
    const input = generateAlias("A1 Beats - Jan'19", { prefix: userId });
    const expectedResult = `${userId}:a1beatsjan19`;

    expect(input).toBe(expectedResult);
  });
});
