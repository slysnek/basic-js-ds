const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.startNode = null;
  }
  root() {
    return this.startNode;
  }

  add(data) {
    let createdNode = new Node(data);
    if (this.startNode) {
      addData(this.startNode, createdNode);
    } else {
      this.startNode = createdNode;
    }

    function addData(node, createdNode) {
      if (createdNode.data < node.data) {
        if (node.left === null) {
          node.left = createdNode;
        } else {
          addData(node.left, createdNode);
        }
      } 
        else 
         {
          if (node.right === null) {
            node.right = createdNode;
          } else {
            addData(node.right, createdNode);
          }
       }
    }
  }

  has(data) {
    function hasData(node, data) {

      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        return hasData(node.right, data);
      } else {
        return hasData(node.left, data);
      }
    }
    return hasData(this.startNode, data);
  }

  find(data) {
    function findData(node, data) {
      if (!node) {
        return null;
      }else if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        return findData(node.right, data);
      } else {
        return findData(node.left, data);
      }
    }
    return findData(this.startNode, data);
  }

  remove(data) {
    function smallestData(node) {
      if (node.left === null){
        return node;
      } 
      else return smallestData(node.left);
    }
    this.startNode = deleteData(this.startNode, data);

    function deleteData(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = deleteData(node.right, data);
        return node;
      } 
      if (data < node.data) {
        node.left = deleteData(node.left, data);
        return node;
      } else {

          if (node.left === false && node.right === false) {
            node = null;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          } else if (!node.left) {
            node = node.right;
            return node;
          }

        let tempClone = smallestData(node.right);
        node.data = tempClone.data;
        node.right = deleteData(node.right, tempClone.data);
        return node;
      }
    }
  }

  min() {
    let minData = this.startNode;
    while (minData.left) {
      minData = minData.left;
    }
    return minData.data;
  }

  max() {
    let maxData = this.startNode;
    while (maxData.right) {
      maxData = maxData.right;
    }
    return maxData.data;
  }
}

module.exports = {
  BinarySearchTree,
};