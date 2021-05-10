const Node = require("./Node.js");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  levelOrder() {
    let queue = [this.root];
    while (queue.length !== 0) {
      const currentNode = queue.shift();
      process.stdout.write(JSON.stringify(currentNode.data));
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (queue.length !== 0) {
        process.stdout.write(" -> ");
      }
    }
    console.log("");
  }

  preOrder() {
    this.preOrderTraversal(this.root);
    console.log("");
  }

  preOrderTraversal(node) {
    process.stdout.write(JSON.stringify(node.data));
    process.stdout.write(" -> ");
    if (node.left) {
      this.preOrderTraversal(node.left);
    }
    if (node.right) {
      this.preOrderTraversal(node.right);
    }
  }
}

module.exports = BinarySearchTree;
