const { Compare, defaultCompare } = require('../../../utils/index')
const { quickSort } = require('../sorting/quick-sort')

function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}
function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)

    let low = 0
    let high = sortedArray.length - 1
    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2)
        const element = sortedArray[mid]
        if (compareFn(element, value) === Compare.LESS_THAN) {
            // Avançar para verificar valores maiores
            low = mid + 1
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            // Retroceder para verificar valores menores
            high = mid - 1
        } else {
            // Retornar o elemento igual ao valor que estamos buscando (valor encontrado)
            return {
                input: array,
                value,
                index: mid
            }
        }
    }
    return DOES_NOT_EXIST
}
module.exports = { binarySearch }
