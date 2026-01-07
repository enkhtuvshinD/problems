/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var countStudents = function (students,sandwiches) {
    const sCount = students.length;
    const q = new Queue();

    for (const s of students) {
        q.push(s);
    }
    let n = sCount;

    for (const c of sandwiches) {
        let count = 0;
        while (count < sCount && c !== q.front()) {
            count++;
            q.push(q.pop())
        }
        if (q.front() === c) {
            q.pop();
            n--;
        }
        else {
            break
        }
    }
    return n;
};