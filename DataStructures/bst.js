class Node {
    constructor(data, left=null, right=null){
        this.data = data
        this.left = left
        this.right= right
    }
}

class Tree {
    constructor(root){
        this.root= null
    }
    add = function(value){
        if (this.root = null){
          return  this.root = new Node(value)
        }
        else{
            const searchTree = function(node){
                if (value < node.data){
                    if (node.data.left == null){
                     node.data.left = new Node(value)
                     return;
                    }else if(node.data.left!= null){
                        return searchTree(node.left)
                    }
                }else if(value > node.data){
                    if (node.right == null){
                        node.right == new Node(value)
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
    remove = function(node){
        removenode = function(root){
            if(root == null){
                return null
            }else if(root.left == null && root.right == null){
                root == null
                return;
            }
        }
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
            }else if( current.data > value){
                current = current.right
            }else if ( current.data < value){
                current = current.left
            }
            return false;
        }
    }

}