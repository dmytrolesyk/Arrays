'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (!~index) return;
  array.splice(index, 1);
};

const removeElements = (array, ...items) => items.forEach(
  i => removeElement(array, i)
);

module.exports = { removeElements };
