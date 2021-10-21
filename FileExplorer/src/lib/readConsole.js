const stdin = process.stdin;
const readConsole = () => {
  console.log("\033[33m Enter your choice or press -1 to go back: \033[39m");
  stdin.setEncoding("utf8");
  stdin.on("data", (data) => {
    console.log(data);
  });
};

module.exports = readConsole;
