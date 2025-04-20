const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
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

module.exports = {
    Compare,
    defaultCompare,
    swap,
    createAnArray
}
