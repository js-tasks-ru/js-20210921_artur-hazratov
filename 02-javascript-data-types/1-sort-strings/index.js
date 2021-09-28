/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedOne = [...arr];
  if (param === 'asc') {
    return sortedOne.sort(function(a, b) {
      let normA = a.normalize();
      let normB = b.normalize();
      return normA.toLowerCase().localeCompare(normB.toLowerCase(), 'ru', {caseFirst: 'upper'});
      
    });
  }
      
  if (param === 'desc') {
    return sortedOne.sort(function(a, b) {
      let normA = a.normalize();
      let normB = b.normalize();
      return normA.toLowerCase().localeCompare(normB.toLowerCase(), 'ru', {caseFirst: 'upper'});          
    }).reverse();
  }
}