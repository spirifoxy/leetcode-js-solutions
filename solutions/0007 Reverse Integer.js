/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
    Input: 123
    Output: 321

Example 2:
    Input: -123
    Output: -321

Example 3:
    Input: 120
    Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:
[−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

const MAX_INT = (Math.pow(2, 32) / 2) - 1;
const MIN_INT = (Math.pow(2, 32) / 2) * (-1);

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newX = 0, div = 0, rem = 0;
    let isNegative = x < 0;
    if (isNegative) {
        x *= -1;
    }
    do {
        div = Math.floor(x / 10);
        rem = x % 10;
        if (newX * 10 + rem > MAX_INT || (newX * 10 + rem) * (-1) < MIN_INT) {
            return 0;
        }
        newX = newX * 10 + rem;
        x = div;
    } while(div !== 0)
    if (isNegative) {
        newX *= -1;
    }
    return newX;
};