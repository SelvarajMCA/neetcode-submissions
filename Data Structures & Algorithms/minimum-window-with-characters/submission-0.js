class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = [];
        let windows = {};
        let windowt = {};
        for (let char of t) {
            windowt[char] = (windowt[char] || 0) + 1;
        }
        let need = Object.keys(windowt).length;
        let have = 0;
        let resLen = Infinity;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            windows[c] = (windows[c] || 0) + 1;
            if (windowt[c] && windowt[c] == windows[c]) {
                have++;
            }
            while (need == have) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l,r];
                }
                windows[s[l]]--;
                if(windows[s[l]] < windowt[s[l]]){
                    have--;
                }
                l++;
            }

        }
        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
