class PriorityQueue {
    #heap;
    #cmp;

    /**
     * Initializes an empty priority queue.
     * 
     * @param {Function} cmp is a function that takes two items as inputs and returns
     *                   ordering necessary for priority queue. For example, for minimum
     *                   priority queue, we may return item1 < item2, for maximum priority
     *                   queue, we may return item1 > item2, and so on.
     */
    constructor(cmp) {
        this.#heap = Array();
        this.#cmp = cmp;
    }

    /**
     * Enqueues the given item into the priority queue.
     * 
     * @param {Any} item Item to be enqueued. 
     */
    enqueue(item) {
        this.#heap.push(item);
        this.#heapifyUp(this.#heap.length - 1);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue underflow!");
        }
        if (this.#heap.length === 1) {
            const item = this.#heap.pop();
            return item;
        }

        const item = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#heapifyDown(0);
        return item;
    }

    peek() {
        return this.#heap[0];
    }

    size() {
        return this.#heap.length;
    }

    isEmpty() {
        return this.#heap.length === 0;
    }

    #heapifyUp(idx) {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.#cmp(this.#heap[idx], this.#heap[parentIdx]) < 0) {
                [this.#heap[idx], this.#heap[parentIdx]] = [this.#heap[parentIdx], this.#heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    #heapifyDown(idx) {
        const lastIdx = this.#heap.length - 1;
        while (true) {
            const leftChildIdx = idx * 2 + 1;
            const rightChildIdx = idx * 2 + 2;
            let minIdx = idx;

            if (leftChildIdx <= lastIdx && this.#cmp(this.#heap[leftChildIdx], this.#heap[minIdx]) < 0) {
                minIdx = leftChildIdx;
            }
            if (rightChildIdx <= lastIdx && this.#cmp(this.#heap[rightChildIdx], this.#heap[minIdx]) < 0) {
                minIdx = rightChildIdx;
            }
            if (minIdx !== idx) {
                [this.#heap[idx], this.#heap[minIdx]] = [this.#heap[minIdx], this.#heap[idx]];
                idx = minIdx;
            } else {
                break;
            }
        }
    }
}

module.exports = PriorityQueue;