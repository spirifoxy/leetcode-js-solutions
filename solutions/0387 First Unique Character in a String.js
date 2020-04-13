/*
Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.

Examples:
    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.

Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const m = new Map(); // map char to number of repetitions
    for (let i = 0; i < s.length; i++) {
        const v = s[i];
    
        let counter = m.get(v);
        counter = counter === undefined ? 0 : ++counter;
        m.set(v, counter);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (!m.get(s[i])) {
            return i;
        }
    }

    return -1;
};