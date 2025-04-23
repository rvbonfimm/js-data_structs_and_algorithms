const utils = require('../../../utils/index')

const spec = {
    name: 'Radix Sort',
    complexity: 'O(nk) / O(n+s), onde: n = número de elementos, k = tamanho da string, s = tamanho do alfabeto',
    understandingStatus: 'Beginner',
    loops: 0,
    swaps: 0
}
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex
    const buckets = []
    const aux = []

    // Inicializando os buckets com base nas raízes (1, 10, 100 etc...)
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        buckets[bucketsIndex]++
        spec.loops += 1 // compute alg. spec loops
    }
    // Gerar a contagem correta ao countingSort (ordenação por contagem)
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }
    // Mover os valores para o array original
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        aux[--buckets[bucketsIndex]] = array[i]
        spec.loops += 1 // compute alg. spec loops
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i]
        spec.loops += 1 // compute alg. spec loops
    }
    return array
}
function radixSort(array, radixBase = 10) {
    if (array.length < 2) return array

    const minValue = utils.findMinValue(array)
    const maxValue = utils.findMaxValue(array)
    let significantDigit = 1
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
        significantDigit *= radixBase
        spec.loops += 1 // compute alg. spec loops
    }
    return [array, spec]
}
module.exports = { radixSort }