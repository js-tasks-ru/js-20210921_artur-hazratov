/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let clonedObj = Object.assign({}, obj);
  for (let key in clonedObj) {
    if (fields.includes(key)) {
      delete clonedObj[key];
    }
  }
  return clonedObj;
};
