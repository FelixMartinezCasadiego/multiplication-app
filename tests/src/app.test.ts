// process.argv = ["node", "app.ts", "-b", "10"];
// import "../../src/app";
import { ServerApp } from "../../src/presentation/server-app";

describe("app.ts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call Server.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = [
      "node",
      "app.ts",
      "-b",
      "10",
      "-l",
      "-s",
      "-n",
      "test-file",
    ];

    await import("../../src/app");

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10,
      fileDestination: "outputs",
      fileName: "test-file",
      limit: 10,
      showTable: true,
    });
  });
});
