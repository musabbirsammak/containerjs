class Queue {
    /**
     * Initializes a new queue with the given capacity.
     * 
     * @param {Number} Initial capacity. 
     */
    constructor(capacity) {
        this.q = Array(capacity);
        this.capacity = this.capacity;
        this.length = 0;
        this.head = -1;
        this.tail = -1;
    }

    /**
     * Enqueues the given item in the queue.
     * 
     * @param {Any} item Item to be enqueued.
     * @throws {RangeError} Queue overflow.
     */
    enqueue(item) {
        if (this.isFull) {
            throw new RangeError("Queue overflow.");
        }
        if (this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.capacity;
        this.q[this.tail] = item;
        this.size++;
    }

    /**
     * Returns the first element from the queue.
     * 
     * @returns {Any} First element.
     * @throws {RangeError} Queue underflow.
     */
    dequeue() {
        if (this.isEmpty()) {
            throw new RangeError("Queue underflow.");
        } else {
            let item = this.q[this.head];
            if (this.head === this.tail) {
                this.head = -1;
                this.tail = -1;
            } else {
                this.head = (this.head + 1) % this.capacity;
            }
            return item;
        }
    }

    /**
     * Returns the first element of the queue.
     *  
     * @returns {Any} First element of the array. 
     */
    peek() {
        if (this.isEmpty()) {
            throw new RangeError("Queue underflow.");
        } else {
            return this.q[this.head];
        }
    }

    /**
     * Whether the queue is full or not.
     * 
     * @returns {Boolean} True if the queue is full, false otherwise. 
     */
    isFull() {
        return ((this.head == 0) && (this.tail == this.capacity - 1)) || ((this.tail + 1) == this.head);
    }

    /**
     * Whether the queue is empty or not.
     * 
     * @returns {Boolean} True if the queue is empty, false otherwise. 
     */
    isEmpty() {
        return (this.head == -1) && (this.tail == -1);
    }
}

module.exports = Queue;