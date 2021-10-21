const getStartUpArgs = require("./lib/startUp");
const readFileDir = require("./lib/readFileDir");
const readConsole = require("./lib/readConsole");

const startPath = getStartUpArgs();

readFileDir(startPath);

readConsole();

// standard In -- input stream  --- some events
