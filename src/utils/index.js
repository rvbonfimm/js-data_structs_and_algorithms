const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}
const DOES_NOT_EXIST = -1
function defaultEquals(a, b) {
    return a === b;
}

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
function swap(array, a, b) {
    /* const temp = array[a]
    array[a] = array[b]
    array [b] = temp */ // modo clássico
    return [array[a], array[b]] = [array[b], array[a]] // modo ES2015
}

function createAnArray(size, mode = 'ordered') {
    if (!size) return []

    const array = []
    if (mode === 'ordered') {
        for (let i = size; i > 0; i--) {
            array.push(i)
        }
        return array
    } else if (mode === 'random') {
        let i = 0;
        while (i < size) {
            let newValue = Math.floor(Math.random() * size)
            array.push(newValue)
            i++
        }
        return array
    }
    return []
}
function findMaxValue(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
function findMinValue(array) {
    let min = array[0]
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < min) min = array[i]
    }
    return min
}

module.exports = {
    Compare,
    defaultCompare,
    swap,
    createAnArray,
    findMaxValue,
    findMinValue,
    DOES_NOT_EXIST,
    defaultEquals
}
