class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        let mp = new Map();
        for (let num of nums) {
            if (!mp.get(num)) {
                let L = mp.get(num - 1) || 0;
                let R = mp.get(num + 1) || 0
                mp.set(num, L + R + 1);
                mp.set(num - L, mp.get(num))
                mp.set(num + R, mp.get(num))
                res = Math.max(res, mp.get(num))
            }
        }
        return res;
    }
}
