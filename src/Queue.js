class Queue {
    #queue;
    #capacity;
    #head;
    #tail;

    /**
     * Initializes an empty queue with the given capacity.
     * 
     * @param {Number} Initial capacity. 
     */
    constructor(initialCapacity) {
        this.#queue = Array(initialCapacity);
        this.#head = -1;
        this.#tail = -1;
        this.#capacity = initialCapacity;
        this.length = 0;
    }

    /**
     * Enqueues the given item into the queue.
     * 
     * @param {Any} item Item to be enqueued.
     * @throws {RangeError} Queue overflow.
     */
    enqueue(item) {
        if (this.isFull()) {
            throw new RangeError("Queue overflow.");
        }
        if (this.isEmpty()) {
            this.#head = 0;
        }
        this.#tail = (this.#tail + 1) % this.#capacity;
        this.#queue[this.#tail] = item;
        this.length++;
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
            let item = this.#queue[this.#head];
            if (this.#head === this.#tail) {
                this.#head = -1;
                this.#tail = -1;
            } else {
                this.#head = (this.#head + 1) % this.#capacity;
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
            return this.#queue[this.#head];
        }
    }

    /**
     * Whether the queue is full or not.
     * 
     * @returns {Boolean} True if the queue is full, false otherwise. 
     */
    isFull() {
        return ((this.#head == 0) && (this.#tail == this.#capacity - 1)) || ((this.#tail + 1) == this.#head);
    }

    /**
     * Whether the queue is empty or not.
     * 
     * @returns {Boolean} True if the queue is empty, false otherwise. 
     */
    isEmpty() {
        return (this.#head == -1) && (this.#tail == -1);
    }
}

module.exports = Queue;