
/*
Reverse a singly linked list.

Example:
    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) { //iterative
    if (head === null) {
        return null;
    }
    let prev = null;
    let current = head;
    while (current.next) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    current.next = prev;
    head = current;
    return head;
    
   
};

var reverseListRec = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let newHead = reverseListRec(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};