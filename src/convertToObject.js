'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const propertiesArray = sourceString.split(';');

  propertiesArray.forEach((element) => {
    if (element.length >= 2) {
      const splitElement = element.split(':').map((item) => item.trim());

      cssObject[splitElement[0]] = splitElement[1];
    }
  });

  return cssObject;
}

module.exports = convertToObject;
