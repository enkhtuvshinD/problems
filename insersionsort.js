class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        const result = [];
        for (let i = 0; i < pairs.length; i++) {
            let j = i - 1;
            while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
                let tmp = pairs[j + 1];
                pairs[j + 1] = pairs[j];
                pairs[j] = tmp;
                j--;
            }
            result.push([...pairs]);
        }
        return result;
    }
}