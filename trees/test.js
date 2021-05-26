const BinarySearchTree = require("./BinarySearchTree");

const bst = new BinarySearchTree();
[12, 20, 33, 4, 3, 98, 54].forEach((element) => bst.insert(element));

bst.levelOrder();
