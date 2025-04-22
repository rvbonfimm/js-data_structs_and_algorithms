const utils = require('../../../utils')
const insertionSort = require('./insertion-sort')

const spec = {
    name: 'Bucket Sort (Bin Sort)',
    complexity: '',
    description: '',
    understandingStatus: '',
    loops: 0,
    swaps: 0
}

function sortBuckets(buckets) {
    const sortedArray = []
    for (i = 0; i < buckets.length; i++) {
        if (buckets[i] !== null) {
            insertionSort(buckets[i])
            sortedArray.push(...buckets[i])
        }
    }
    return sortedArray
}
function createBuckets(array, bucketSize) {
    let minValue = 0
    let maxValue = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
        } else if (array[i] > maxValue) {
            maxValue = array[i]
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    const buckets = []
    // Inicializando cada bucket (balde)
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }
    // Iterando sobre o array para dividir cada elemento em seu devido bucket
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
        // Cada bucket é um array multidimensional, pois cada posição conterá um array com as entradas originais
        buckets[bucketIndex].push(array[i])
    }
    return buckets
}
function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array
    }
    const buckets = createBuckets(array, bucketSize)
    return sortBuckets(buckets)
}

// let array = utils.createAnArray(7, 'random')
let array = [5,4,3,2,6,1,7,10,9,8]
console.log(`Original Array: ${array.join()}`)
array = bucketSort(array)
console.log(`Sorted Array: ${array.join()}`)
console.log(`Alg. Spec.: ${JSON.stringify(spec)}`)
