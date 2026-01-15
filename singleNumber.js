/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    const map = new Map();
    for (const num of nums) {
        map.set(num,(map.get(num) || 0) + 1);
    }
    for (const [key,value] of map) {
        if (value === 1) {
            return key
        }
    }
};
