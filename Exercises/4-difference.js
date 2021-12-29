'use strict';

const difference = (array1, array2) => {
  const diff = [];
  for (const value of array1) {
    if (!array2.includes(value)) {
      diff.push(value);
    }
  }
  return diff;
};

module.exports = { difference };
