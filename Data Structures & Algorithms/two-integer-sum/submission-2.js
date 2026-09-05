class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexObject = {};
        for (let i = 0; i < nums.length; i++) {
            indexObject[nums[i]] = i;
        }
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] + (target - nums[i]) == target && indexObject[target - nums[i]] && i != indexObject[target - nums[i]]) {
                result = [i, indexObject[target - nums[i]]]
                break;
            }
        }
        return result;
    }
}
