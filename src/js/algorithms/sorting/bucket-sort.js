const utils = require('../../../utils')
const insertionSort = require('./insertion-sort')

const spec = {
    name: 'Bucket Sort (Bin Sort)',
    worstComplexity: 'O(n²)',
    middleComplexity: 'O(n + k)',
    bestComplexity: 'O(n + k)',
    description: 'Algoritmo de ordenação com distribuição, separando os elementos em diferentes baldes e aplicando ordenação com outros algoritmos, como o insertion ou quick sort.',
    understandingStatus: 'Beginner',
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
module.exports = { bucketSort }
