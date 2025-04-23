const utils = require('../../../utils')

const spec = {
    name: 'Counting Sort',
    complexity: 'O(n + k), onde k é o tamanho do array temporário de contagem',
    description: 'é um algoritmo de ordenação de inteiros',
    understandingStatus: 'Beginner',
    loops: 0,
    swaps: 0
}

function countingSort(array) {
    if (array.length < 2) {
        return array
    }
    const maxValue = utils.findMaxValue(array)
    const counts = new Array(maxValue + 1)
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0
        }
        counts[element]++
    })
    let sortedIndex = 0
    counts.forEach((count, i) => {
        while (count > 0) {
            array[sortedIndex++] = i
            count--
        }
    })
    return array
}
module.exports = { countingSort }
