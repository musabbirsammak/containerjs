class Queue {
    constructor(size) {
        this.q = Array(capacity);
        this.capacity = this.capacity;
        this.size = 0;
        this.head = -1;
        this.tail = -1;
    }

    enqueue(item) {
        if (this.isFull) {
            throw new RangeError("Queue overflow.");
        }
        if (this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.capacity;
        this.q[this.tail] = item;
    }

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

    peek() {
        if (this.isEmpty()) {
            throw new RangeError("Queue underflow.");
        } else {
            return this.q[this.head];
        }
    }

    isFull() {
        return ((this.head == 0) && (this.tail == this.capacity - 1)) || ((this.tail + 1) == this.head);
    }

    isEmpty() {
        return (this.head == -1) && (this.tail == -1);
    }
}