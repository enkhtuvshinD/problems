
var MyStack = function () {
    this.queue = new Queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
    for (let i = this.queue.size() - 1; i > 0; i--) {
        this.queue.push(this.queue.pop())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.queue.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue.front()
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */