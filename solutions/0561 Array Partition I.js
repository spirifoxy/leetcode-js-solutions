/*
https://leetcode.com/problems/array-partition-i/

Given an array of 2n integers, your task is to group these integers into n pairs of integer,
say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
    Input: [1,4,3,2]
    Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

Note:
    n is a positive integer, which is in the range of [1, 10000].
    All the integers in the array will be in the range of [-10000, 10000].
*/

/**
 * 
 * @param {Array} arr 
 * @returns {Array} 
 */
var quickSort = function(arr) {
    if (arr.length < 2) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const equal = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return quickSort(left).concat(equal, quickSort(right));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum = 0;
    nums = quickSort(nums);
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};