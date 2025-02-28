/* Use cases */
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log("Server running...\n");

    const welcomeMessage = `
======================================================
                    Tabla del ${base}
======================================================
`;
    // Create table
    const table = new CreateTable().execute({ base, limit });

    // Create file
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });

    if (showTable) console.log(`${welcomeMessage} \n${table}`);

    wasCreated
      ? console.log("File Created!")
      : console.error("File not created!");
  }
}
