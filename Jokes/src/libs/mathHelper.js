// Write a random number generator

// It will take a max number and a min number and generate another number within that reange

const getRandom = (min, max) => {
  let random = Math.random();
  let randomNumberFraction = (max - min) * random + min;
  let result = Math.ceil(randomNumberFraction);
  return result;
};

module.exports = {
  getRandom,
};
