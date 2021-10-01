/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof string === 'string') {
    let next = 0;
    let newStr = "";
    do {
      let first = next;
      let lastOfCurrent = string.lastIndexOf(string[next]);
      
      if ((lastOfCurrent - next) > size) {
        let sliced = string.slice(first, first + size);
        newStr = newStr + sliced;
        next = lastOfCurrent + 1;
      } else if ((lastOfCurrent - next) <= size) {
        let sliced = string.slice(first, lastOfCurrent + 1);
        newStr = newStr + sliced;
        next = lastOfCurrent + 1;
      } 
      else if ((lastOfCurrent - next) === size) {
        let sliced = string.slice(first, lastOfCurrent + 1);
        newStr = newStr + sliced;
        next = lastOfCurrent + 1;
      } 
          
    } while (next > string.length - 1);
    return newStr;      
  } return "Not a string"; 
}
