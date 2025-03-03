const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("../../../../src/configs/plugins/yargs.plugin");

  return yarg;
};

describe("yargs.plugin", () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        base: 5,
        l: 10,
        limit: 10,
        s: false,
        show: false,
        n: "table",
        name: "table",
        d: "outputs",
      })
    );
  });

  test("should return configuration with custom values", async () => {
    const argv = await runCommand(["-b", "7", "-s", "-n", "custom-name"]);

    expect(argv).toEqual(
      expect.objectContaining({
        base: 7,
        l: 10,
        limit: 10,
        s: true,
        show: true,
        n: "custom-name",
        d: "outputs",
      })
    );
  });
});
