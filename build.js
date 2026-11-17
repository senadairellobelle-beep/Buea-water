const fs = require("node:fs");
const path = require("node:path");

const outputDirectory = path.join(__dirname, "public");
const directoriesToCopy = ["HTML", "CSS", "JAVASCRIPT"];

fs.rmSync(outputDirectory, { recursive: true, force: true });

for (const directory of directoriesToCopy) {
    const source = path.join(__dirname, directory);
    if (!fs.existsSync(source)) {
        throw new Error(`Required deployment directory not found: ${directory}`);
    }

    fs.cpSync(source, path.join(outputDirectory, directory), { recursive: true });
}

console.log("Static site built in public/");
