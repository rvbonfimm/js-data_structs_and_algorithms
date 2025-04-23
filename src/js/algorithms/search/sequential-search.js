const { DOES_NOT_EXIST, defaultEquals } = require('../../../utils/index')

function sequentialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return {
                input: array,
                value,
                index: i
            }
        }
    }
    return DOES_NOT_EXIST
}
module.exports = { sequentialSearch }
