import fs from "fs";

/* Plugin */
import { yarg } from "./configs/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = "";
const welcomeMessage = `

======================================================
                    Tabla del ${base}
======================================================
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = `${welcomeMessage} \n${outputMessage}`;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created");
