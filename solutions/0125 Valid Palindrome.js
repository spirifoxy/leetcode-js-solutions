/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
    Input: "A man, a plan, a canal: Panama"
    Output: true

Example 2:
    Input: "race a car"
    Output: false
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    let lettersCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (isCharValid(s[i])) {
            lettersCount++;
        }
    }

    while (lettersCount > 0) {
        while ((start < s.length - 1) && !isCharValid(s[start])) {
            start++;
        }
        while ((end > 0) && !isCharValid(s[end])) {
            end--;
        }
       
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
        lettersCount -= 2;
    }
    return true;
};

/**
 * 
 * @param {string} c 
 * @returns boolean
 */
var isCharValid = function(c) {
    let numC = parseInt(c);
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (numC >= 0 && numC <= 9);
}
