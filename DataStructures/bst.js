class Node {
    constructor(data, left=null, right=null){
        this.data = data
        this.left = left
        this.right= right
    }
}

class Tree {
    constructor(){
        this.root= null
    }
    add(value){
        if (this.root == null){
          this.root = new Node(value)
          return
        }
        else{
            const searchTree = function(node){
                if (value < node.data){
                    if (node.left == null){
                     node.left = new Node(value)
                     return;
                    }else if(node.left!= null){
                        return searchTree(node.left)
                    }
                }else if(value > node.data){
                    if (node.right == null){
                        node.right = new Node(value)
                        return;
                    }else if (node.right != null){
                        return searchTree(node.right)
                    }
                } else{
                    return null
                }
            }
            return searchTree(this.root)
        }

    }
    remove = function(data){
        removenode = function(node, data){
            if(node == null){
                return null
            }
            if (node.data == data){
                if(node.left == null && node.right == null){
                     node.data = null
                     return
                }
                if(node.left == null){
                    node.data = node.right
                }
                if(node.right == null){
                    node.data = node.left
                }
                var tempNode = node.right
                while(tempNode!=null){
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(tempNode.data, data)
                return node
            }
            else if(node.data > data){
                node.right = removeNode(node.right, data)
                return
            }
            else{
                node.left = removeNode(node.left, data)
            }
        }
        this.root = removeNode(this.root, data);
    }
    findMin = function(){
       let current = this.root
       while(current.left != null){
           current = current.left
       }
       return current.data
    }
    findMax = function(){
        let current = this.root
        while(current.right != null){
            current = current.right
        }
        return current.data
    }
    isPresent = function(value){
        let current = this.root
        while (current){
            if (value == current.data){
                return true
            }else if( value < current.data){
                current = current.left
            }else {
                current = current.right
            }
        }
        return false;
    }
    printTree = function(){
        if(this.root == null){
            return null
        }else{
            var result = []
            var printNode = function(node){
                node.left && printNode (node.left)
                result.push(node.data)
                node.right && printNode (node.right)
            }
            printNode(this.root)
            return result
        }
    }

}

module.exports = Tree