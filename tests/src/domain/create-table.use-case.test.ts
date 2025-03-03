import { CreateTable } from "../../../src/domain/use-cases/create-table.use-case";

describe("create-table.use-case", () => {
  const createTable = new CreateTable();

  test("Should create table with default values", () => {
    const table = createTable.execute({ base: 2 });
    const rows = table.split("\n").length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("2 x 1 = 2");
    expect(rows).toBe(10);
  });

  test("Should create table with custom values", () => {
    const options = { base: 3, limit: 20 };

    const table = createTable.execute({
      base: options.base,
      limit: options.limit,
    });
    const rows = table.split("\n").length;

    expect(table).toContain("3 x 1 = 3");
    expect(rows).toBe(options.limit);
  });
});
