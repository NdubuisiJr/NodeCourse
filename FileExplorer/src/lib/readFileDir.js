const fs = require("fs");
const path = require("path");

const readFileDir = (startPath) => {
  console.log(startPath);
  fs.readdir(startPath, "utf8", (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const extension = path.extname(file);
      if (extension) {
        console.log(index + 1, `${"\033[32m"} ${file} ${"\033[39m"}`);
      } else {
        console.log(index + 1, `${"\033[34m"} ${file} ${"\033[39m"}`);
      }
    }
  });
};

module.exports = readFileDir;
