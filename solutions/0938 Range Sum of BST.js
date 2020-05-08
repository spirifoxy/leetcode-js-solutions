/*
https://leetcode.com/problems/range-sum-of-bst/

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
    Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
    Output: 32

Example 2:
    Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
    Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (root === null) {
        return 0;
    }
    
    if (root.val < L) {
        return rangeSumBST(root.right, L, R);
    }
    if (root.val > R) {
        return rangeSumBST(root.left, L, R);
    }
    
    let leftVal = rangeSumBST(root.left, L, R);
    let rightVal = rangeSumBST(root.right, L, R);
    return leftVal + rightVal + (root.val >= L && root.val <= R ? root.val : 0);
};
