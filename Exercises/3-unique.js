'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => array.reduce(
  (res, item) => (!~res.indexOf(item) ? [...res, item] : res), []
);

module.exports = { unique };
