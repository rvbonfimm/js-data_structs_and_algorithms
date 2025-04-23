const { sequentialSearch } = require('./sequential-search')
const { binarySearch } = require('./binary-search')

const binarySearchResult = binarySearch([8, 7, 6, 5, 4, 3, 2, 1], 2)
console.log(binarySearchResult)

const sequentialSearchResult = sequentialSearch([6,2,8,3,6,8,2,9,0,3], 3)
console.log(sequentialSearchResult)
