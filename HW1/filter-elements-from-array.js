/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let retArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            retArr.push(arr[i])
        }
    }
    return retArr
};