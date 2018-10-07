const baseRules = require('./rules');

function generateWebpackRules(options = {}) {
  let rules = Object.keys(options)
    .filter((key) => {
      if (!options[key]) {
        return false;
      }

      if (!baseRules[key]) {
        throw new Error(`[webpack-loader] ${key} not found!`);
      }

      return baseRules[key];
    })
    .reduce((acc, key) => [...acc, ...baseRules[key]], []);

  return rules;
}

module.exports = generateWebpackRules;
