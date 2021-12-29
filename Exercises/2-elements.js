'use strict';

const removeElements = (array, ...items) => {
  items.forEach((item) => {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  });
};

module.exports = { removeElements };
