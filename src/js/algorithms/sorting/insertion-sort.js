const utils = require('../../../../utils')

const spec = {
    name: 'Insertion Sort',
    complexity: 'O(n) at the best situation; O(n²) at the worst ones',
    understandingStatus: 'medium',
    loops: 0,
    swaps: 0
}

function insertionSort(array, compareFn = utils.defaultCompare) {
    const { length } = array
    let temp
    for (let i = 1; i < length; i++) {
        let j = i
        temp = array[i]
        while (j > 0 && compareFn(array[j - 1], temp) === utils.Compare.BIGGER_THAN) {
            array[j] = array[j - 1]
            j--
            spec.loops += 1 // increase spec loops
        }
        array[j] = temp
        spec.loops += 1 // increase spec loops
        spec.swaps += 1 // increase spec loops
    }
    return array
}

let array = utils.createAnArray(5, 'random')
console.log(`Original Array: ${array.join()}`)
array = insertionSort(array)
console.log(`Sorted Array: ${array.join()}`)
console.log(`Alg. Spec.: ${JSON.stringify(spec)}`)
