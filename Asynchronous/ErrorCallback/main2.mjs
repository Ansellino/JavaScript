import { readFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Mendapatkan direktori saat ini untuk ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname, "sample.txt"), (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data
    .toString()
    .replace("%name%", "Dicoding")
    .replace("%your_name%", "JavaScript");

  console.log(greeting);
});
