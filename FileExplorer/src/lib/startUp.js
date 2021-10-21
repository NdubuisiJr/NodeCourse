const getStartUpArgs = () => {
  let startPath = process.argv[2];
  if (startPath === undefined) {
    startPath = process.cwd();
  }
  return startPath;
};

module.exports = getStartUpArgs;
