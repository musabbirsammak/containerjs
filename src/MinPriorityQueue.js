class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(item) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue underflow!");
        }
        if (this.heap.length === 1) {
            const minimum = this.heap.pop();
            return minimum;
        }

        const minimum = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return minimum;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp(idx) {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifyDown(idx) {
        const lastIdx = this.heap.length - 1;
        while (true) {
            const leftChildIdx = idx * 2 + 1;
            const rightChildIdx = idx * 2 + 2;
            let minIdx = idx;

            if (leftChildIdx <= lastIdx && this.heap[leftChildIdx] < this.heap[minIdx]) {
                minIdx = leftChildIdx;
            }
            if (rightChildIdx <= lastIdx && this.heap[rightChildIdx] < this.heap[minIdx]) {
                minIdx = rightChildIdx;
            }
            if (minIdx !== idx) {
                [this.heap[idx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[idx]];
                idx = minIdx;
            } else {
                break;
            }
        }
    }
}

module.exports = MinPriorityQueue;