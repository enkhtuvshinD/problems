/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let before = null;
        //[0,1,2,3]
        while (curr !== null) {
            const next = curr.next;
            before = curr;
            curr = next;
        }
        return before
    }
}
