class Stack {
    #stack;
    #head;
    #tail;
    #capacity;

    /**
     * Initializes an empty stack of given capacity.
     * 
     * @param {Number} initialCapacity Capacity of the stack.
     */
    constructor(initialCapacity) {
        this.#stack = Array(initialCapacity);
        this.#head = -1;
        this.#tail = -1;
        this.#capacity = initialCapacity;
        this.length = 0;
    }

    /**
     * Push the given item into the stack.
     * 
     * @param {Any} item Item to be pushed. 
     */
    push(item) {
        if (this.isFull()) {
            throw new RangeError("Stack overflow.");
        } else {
            if (this.isEmpty()) {
                this.#head = 0;
            }
            this.#tail++;
            this.#stack[this.#tail] = item;
            this.length++;
        }
    }

    /**
     * Removes and returns the last element inserted into the stack.
     * 
     * @returns {Any} Last element inserted into the stack.
     */
    pop() {
        if (this.isEmpty()) {
            throw new RangeError("Stack underflow.");
        } else {
            let item = this.#stack[this.#tail];
            if (this.#head == this.#tail) {
                this.#head = -1;
                this.#tail = -1;
            } else {
                this.#tail--;
            }
            this.length--;
            return item;
        }
    }

    /**
     * Returns the last element pushed into the stack.
     * 
     * @returns (Any) Last element inserted into the stack.
     */
    peek() {
        if (this.isEmpty()) {
            throw new RangeError("Stack underflow.");
        } else {
            return this.#stack[this.#tail];
        }
    }

    /**
     * Whether the stack is empty or not.
     * 
     * @returns {Boolean} true if the stack is empty, false otherwise.
     */
    isEmpty() {
        return (this.#head == -1) && (this.#tail == -1);
    }

    /**
     * Whether the stack is full or not.
     * 
     * @returns {Boolean} true if the stack is full, false otherwise.
     */
    isFull() {
        return (this.#tail == this.#capacity - 1);
    }
}