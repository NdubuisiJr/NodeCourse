const mathHelper = require("./libs/mathHelper");
const fileHelper = require("./libs/fileHelper");

const App = () => {
  const jokes = fileHelper.getJokes();
  const random = mathHelper.getRandom(0, jokes.length);

  const currentJoke = jokes[random - 1];
  console.log(currentJoke);
};

setInterval(App, 1000);
