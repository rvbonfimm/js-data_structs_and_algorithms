const utils = require('../../../utils')

const spec = {
    name: 'Quick Sort',
    complexity: 'O(n log n)',
    understandingStatus: 'Beginner',
    loops: 0,
    swaps: 0
}

function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (compareFn(array[i], pivot) === utils.Compare.LESS_THAN) {
            i++
            spec.loops += 1
        }
        while (compareFn(array[j], pivot) === utils.Compare.BIGGER_THAN) {
            j--
            spec.loops += 1
        }
        if (i <= j) {
            utils.swap(array, i, j)
            spec.swaps += 1
            i++
            j--
        }
        spec.loops += 1
    }
    return i
}

function quick(array, left, right, compareFn) {
    let index
    if (array.length > 1) {
        index = partition(array, left, right, compareFn)
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn)
        }
        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array
}
export function quickSort(array, compareFn = utils.defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn)
}

