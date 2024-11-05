/* -- BST Level-Order Traversal --
Task: A level-order traversal, also known as a breadth-first search (BFS), visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder function, so that it prints the level-order traversal of the binary search tree. */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        return this.root;
    };

    this.levelOrder = function(root) {
        let queue = [root];
        while(queue.length) {
            let treeNode = queue.shift();
            process.stdout.write(treeNode.data + ' ');
            if(treeNode.left)
                queue.push(treeNode.left);
            if(treeNode.right)
                queue.push(treeNode.right);
        }
	};
};

process.stdin.resume();
process.stdin.setEncoding('ascii');
var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});
process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    tree.levelOrder(root);
});
