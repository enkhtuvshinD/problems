function replaceElements(arr: number[]): number[] {let n = arr.length;
        let ans = new Array(n);
        for (let i = 0; i < n; i++) {
            let rightMax = -1;
            for (let j = i + 1; j < n; j++) {
                rightMax = Math.max(rightMax, arr[j]);
            }
            ans[i] = rightMax;
        }
                                                   
        return ans;
    
};
