'use strict';

const removeElement = (array, item) => {
  if (array.includes(item)) {
    array.splice(array.indexOf(item), 1);
  }
};

module.exports = { removeElement };
