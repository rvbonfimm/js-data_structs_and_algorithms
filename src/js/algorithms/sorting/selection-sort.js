const utils = require('../../../../utils')

const spec = {
    name: 'Selection Sort',
    complexity: 'O(n²)',
    understandingStatus: 'medium',
    loops: 0,
    swaps: 0
}

function selectionSort(array, compareFn = utils.defaultCompare) {
    const { length } = array
    let indexMin
    for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === utils.Compare.BIGGER_THAN) {
                indexMin = j // found a new minimum value to save
            }
            spec.loops += 1 // increase spec loops counter
        }
        if (i !== indexMin) {
            utils.swap(array, i, indexMin)
            spec.swaps += 1
        }
        spec.loops += 1 // increase spec loops counter
    }
    return array
}

let array = utils.createAnArray(5, 'random')
console.log(`Original Array: ${array.join()}`)
array = selectionSort(array)
console.log(`Sorted Array: ${array.join()}`)
console.log(`Alg. Spec.: ${JSON.stringify(spec)}`)
