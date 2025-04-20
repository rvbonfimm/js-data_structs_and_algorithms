const utils = require('../../../../utils')

const spec = {
    name: 'Merge Sort',
    resume: 'Ordenação por intercalação ou mistura. do tipo dividir e conquistar',
    description: 'Primeiro algoritmo que pode ser usado em um cenário do mundo real. Mozilla utiliza o Merge Sort para ordenação de arrays (Array.propotype.sort), enquanto que o Chrome utiliza uma variação do Quick Sort',
    complexity: 'O(n log n)',
    understandingStatus: 'opened',
    loops: 0,
    swaps: 0
}

function merge(left, right, compareFn) {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) {
        result.push(
            compareFn(left[i], right[j]) === utils.Compare.LESS_THAN ? left[i++] : right[j++]
        )
        spec.loops += 1 // increase spec loops counter
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
function mergeSort(array, compareFn = utils.defaultCompare) {
    if (array.length > 1) {
        const { length } = array
        const middle = Math.floor(length / 2)
        const left = mergeSort(array.slice(0, middle), compareFn)
        const right = mergeSort(array.slice(middle, length), compareFn)
        array = merge(left, right, compareFn)
    }
    return array
}

let array = utils.createAnArray(10, 'random')
console.log(`Original Array: ${array.join()}`)
array = mergeSort(array)
console.log(`Sorted Array: ${array.join()}`)
console.log(`Alg. Spec.: ${JSON.stringify(spec)}`)
