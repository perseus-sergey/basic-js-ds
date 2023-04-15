const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode || null
  }

  add(data) {

    let insertNode = (node, value) => {
      if (!node) return new Node(value)

      if (node.data === value) return node

      if (value < node.data) node.left = insertNode(node.left, value)

      else node.right = insertNode(node.right, value)

      return node
    }

    this.rootNode = insertNode(this.rootNode, data)
  }

  has(data) {
    let searchNode = (node, value) => {
      if (!node) return false

      if (node.data === value) return true

      if (value < node.data) return searchNode(node.left, value)

      else return searchNode(node.right, value)
    }

    return searchNode(this.rootNode, data)
  }

  find(data) {
    let findNode = (node, value) => {
      if (!node) return null

      if (node.data === value) return node

      if (value < node.data) return findNode(node.left, value)

      else return findNode(node.right, value)
    }

    return findNode(this.rootNode, data)
  }

  remove(data) {
    let delNode = (node, value) => {
      if (!node) return null


      if (value < node.data) {
        node.left = delNode(node.left, value)
        return node
      }
      else if (value > node.data) {
        node.right = delNode(node.right, value)
        return node
      }
      else {
        if (!node.left && !node.right) return null
      }


      if (!node.left) {
        node = node.right
        return node
      }
      if (!node.right) {
        node =  node.left
        return node
      }

      // node has left and right children
      let minRightChild = node.right
      while (minRightChild.left) {
        minRightChild = minRightChild.left
      }
      node.data = minRightChild.data

      node.right = delNode(node.right, minRightChild.data)

      return node
    }

    this.rootNode = delNode(this.rootNode, data)
  }

  min() {
    if (!this.rootNode) return
    let node = this.rootNode
    while(node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootNode) return
    let node = this.rootNode
    while(node.right) {
      node = node.right
    }
    return node.data
  }
}


module.exports = {
  BinarySearchTree
};