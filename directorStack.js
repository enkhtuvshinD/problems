/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let stack = new Array();

    for (const log of logs) {
        if (log.includes('../')) {
            stack.pop();
        }
        if (!log.includes('./')) {
            stack.push(log)
        }
    }
    return stack.length;
};