class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k;
        function quickSelction(l,r){
            let pivot = nums[r];
            let p = l;
            for(let i = l;i<r;i++){
                if(nums[i] <= pivot){
                    [nums[p],nums[i]] = [nums[i],nums[p]];
                    p++;
                }
            }
            [nums[p],nums[r]] = [nums[r],nums[p]];
            if(p > k) return quickSelction(l,p-1);
            else if(p<k) return quickSelction(p+1,r);
            else return nums[p];
        }
        return quickSelction(0,nums.length -1)
    }
}
