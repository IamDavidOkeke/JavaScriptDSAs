const Stack  = require("./DataStructures/stack");
const Queue  = require("./DataStructures/queue");
const BinarySearchTree  = require("./DataStructures/bst");

const Bst = new BinarySearchTree

Bst.add(8)
Bst.add(7)
Bst.add(1)
Bst.add(3)
Bst.add(2)
console.log(Bst.printTree())
console.log(Bst.isPresent(7))