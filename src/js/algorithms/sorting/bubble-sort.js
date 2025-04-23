const utils = require('../../../utils')

const spec = {
    name: 'Bubble Sort',
    complexity: 'O(n²)',
    understandingStatus: 'done',
    loops: 0
}

function bubbleSort(array, compareFn = utils.defaultCompare) {
    const { length } = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1]) === utils.Compare.BIGGER_THAN) {
                utils.swap(array, j, j + 1)
            }
            spec.loops += 1 // increment loops counter
        }
        spec.loops += 1 // increment loops counter
    }
    return array
}
module.exports = { bubbleSort }
