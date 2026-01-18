/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s,t) {
    let map = new Map();

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            map.set(t[i],[]);
        }
        map.get(t[i]).push(i);
    }

    let lastIndex = -1;

    for (let ch of s) {
        if (!map.has(ch)) return false;

        let indices = map.get(ch);
        let found = false;

        for (let idx of indices) {
            if (idx > lastIndex) {
                lastIndex = idx;
                found = true;
                break;
            }
        }

        if (!found) return false;
    }

    return true;
};