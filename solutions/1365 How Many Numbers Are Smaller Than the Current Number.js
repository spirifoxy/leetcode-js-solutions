/*
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

Example 1:
    Input: nums = [8,1,2,2,3]
    Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:
    Input: nums = [6,5,4,8]
    Output: [2,1,0,3]

Example 3:
    Input: nums = [7,7,7,7]
    Output: [0,0,0,0]

Constraints:
    2 <= nums.length <= 500
    0 <= nums[i] <= 100
*/

/**
 * 
 * @param {Array} arr
 * @returns {Array}
 */
var quickSort = function(arr) {
    if (arr.length <= 1) {
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
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = quickSort(nums);
    const counterMap = {};
    const result = [];

    for (let i = 0, counter = 0; i < sortedNums.length; i++) {
        const num = sortedNums[i];
        if (num in counterMap) {
            counter++;
            continue;
        }
        counterMap[num] = counter;
        counter++;
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        result.push(counterMap[num]);
    }
    return result;
};