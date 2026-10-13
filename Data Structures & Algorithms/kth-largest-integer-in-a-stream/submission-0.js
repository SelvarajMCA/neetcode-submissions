class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minheap = new MinPriorityQueue()
        for(const num of nums){
            this.minheap.enqueue(num)
        }
        while(this.minheap.size() > this.k){
            this.minheap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
         this.minheap.enqueue(val)
         if(this.minheap.size() > this.k){
            this.minheap.dequeue()
        }
        return this.minheap.front();
    }
}
