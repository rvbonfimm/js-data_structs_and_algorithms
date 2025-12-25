import { defaultCompare, Compare } from '../../../utils'
import { Node } from './node'


export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }

    insertNode = (node, key) => {
        /** Go to left side */
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            /** Go to right side */
            if (node.right === null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    insert = (key) => {
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    inOrderTraverseSearch = (callback) => {
        this.inOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    preOrderTraverseSearch = (callback) => {
        this.preOrderTraverseNode(this.root, callback)
    }
    postOrderTraverseSearch = (callback) => {
        this.postOrderTraverseNode(this.root, callback)
    }
}

/** Testing the tree */
const tree = new BinarySearchTree()
const inputs = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
inputs.forEach(key => tree.insert(key))

const printNode = (value) => console.log(value)
console.log(`Running postOrderTraverseSearch alg. with ${inputs.length} keys (${inputs.join(', ')})`)

// tree.inOrderTraverseSearch(printNode)
// tree.preOrderTraverseSearch(printNode)
tree.postOrderTraverseSearch(printNode)
