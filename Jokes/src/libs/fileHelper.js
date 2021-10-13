// path -  used define file paths and folder paths in code
// fs - FileSystem - used for reading and writing files in code

const path = require("path");
const fs = require("fs");

const getJokes = () => {
  const filePath = path.join(__dirname, "boringJokes.txt");
  const content = fs.readFileSync(filePath, "utf8");
  const jokes = content.split("\n");
  return jokes;
};

module.exports = {
  getJokes,
};
