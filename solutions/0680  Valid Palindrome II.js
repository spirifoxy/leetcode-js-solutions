/*
https://leetcode.com/problems/valid-palindrome-ii/

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
    Input: "aba"
    Output: True

Example 2:
    Input: "abca"
    Output: True
Explanation: You could delete the character 'c'.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    // var errorAlreadyFound = false;
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
};

/**
 * 
 * @param {string} s 
 * @param {int} start 
 * @param {int} end 
 */
var validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};