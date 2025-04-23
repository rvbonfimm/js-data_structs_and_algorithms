const { radixSort } = require('./js/algorithms/sorting/radix-sort')
const utils = require('./utils/index')

let randomArray = utils.createAnArray(25, 'random')
console.log(`Input: ${JSON.stringify(randomArray)}\n`);

const [output, specs] = radixSort(randomArray)
console.log(`Output: ${JSON.stringify(output)}\n`);
console.log(`Algorith Spec.: ${JSON.stringify(specs)}`);
