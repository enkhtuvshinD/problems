class DoublyListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
var MyLinkedList = function () {
    this.head = new DoublyListNode(0);
    this.tail = new DoublyListNode(0);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let cur = this.head.next;
    while (cur && index > 0) {
        cur = cur.next;
        index--;
    }
    if (cur && cur !== this.tail && index === 0) {
        return cur.val;
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val);
    const next = this.head.next;
    const prev = this.head;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val);
    const next = this.tail;
    const prev = this.tail.prev;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index,val) {
    let cur = this.head.next;
    while (cur && index > 0) {
        cur = cur.next;
        index--;
    }

    if (cur && index === 0) {
        const node = new ListNode(val);
        const next = cur;
        const prev = cur.prev;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    let cur = this.head.next;
    while (cur && index > 0) {
        cur = cur.next;
        index--;
    }

    if (cur && cur !== this.tail && index === 0) {
        const next = cur.next;
        const prev = cur.prev;
        prev.next = next;
        next.prev = prev;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */