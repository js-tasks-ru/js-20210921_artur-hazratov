/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  if (fields.length !== 0) {
    let keys = Object.keys(obj);
    let newObj = {};
    if (keys.length !== 0) {
      keys.forEach(function(item) { 
        if (fields.includes(item)) {
          newObj[item] = obj[item]
        }
      })
    } else if (keys.length === 0) {
      fields.forEach((each)=> newObj[each] = each);
    } 
    return newObj;
  } else if (fields.length === 0) {
    let empty = {};
    return empty;
  } 
}

