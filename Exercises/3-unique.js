'use strict';

const unique = (array) => {
  const unique = [];
  for (const value of array) {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  }
  return unique;
};

module.exports = { unique };
