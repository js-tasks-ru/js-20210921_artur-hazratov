/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  if (path) {
    return function (obj) {
      let pathToObj = path.split('.');
      let firstProp;
      if (obj.hasOwnProperty(pathToObj[0])) {
        firstProp = obj[pathToObj[0]];
        for (let i = 1; i < pathToObj.length; i++) {
          if (firstProp.hasOwnProperty(pathToObj[i])) {
            firstProp = firstProp[pathToObj[i]]; 
          } else {return firstProp[pathToObj[i]];}
        }
        return firstProp; 
      }
    };
      
  } return path;
}
