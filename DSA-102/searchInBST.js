// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that 
// node. If such a node does not exist, return null.

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

//creating node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);


function searchBST(root,val){
    if(root === null || root.val === val){
        return root;
    }
    if(val < root.val){
        return searchBST(root.left,val);
    }
    return searchBST(root.right,val);
}

console.log(searchBST(root, 2));

// Helper to print the subtree in array form
function treeToArray(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length) {
        let current = queue.shift();
        if (current) {
            result.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}
