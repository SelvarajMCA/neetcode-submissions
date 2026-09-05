class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height || height.length == 0){
            return 0;
        }
        let res = 0;
        let l = 0;
        let r = height.length;
        let laftMax = height[l]
        let rightMax = height[r-1];
        while(l < r){
            if(laftMax < rightMax){
                l++;
                laftMax = Math.max(laftMax,height[l]);
                res = res + laftMax - height[l];
            }else{
                r--;
                rightMax = Math.max(rightMax,height[r]);
                res = res + rightMax - height[r];
            }
        }
        return res;
    }
}
