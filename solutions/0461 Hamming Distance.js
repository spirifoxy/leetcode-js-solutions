/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
    Input: x = 1, y = 4
    Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

// /**
//  * @param {number} x
//  * @param {number} y
//  * @return {number}
//  */
// var hammingDistance = function(x, y) {
//     const xor = getBinary(x ^ y);
//     let distance = 0;
//     for (let i = 0; i < xor.length; i++) {
//         const char = xor[i];
//         if (char == '1') {
//             distance++;
//         }
//     }
//     return distance;
// };

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let distance = 0;
    let xor = x ^ y;
    while(xor) {
        if (xor & 1) {
            distance++;
        }
        xor = xor >>> 1;
    }
    return distance;
};
