const MinPriorityQueue = require("../src/MinPriorityQueue");

let comparator = function(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

let mQueue = new MinPriorityQueue(comparator);

test('Test MinPriorityQueue enqueue function', () => {
    mQueue.enqueue(17);
    mQueue.enqueue(5);
    mQueue.enqueue(27);
    mQueue.enqueue(13);

    expect(mQueue.size()).toBe(4);
    expect(mQueue.peek()).toBe(5);
});

test('Test MinPriorityQueue dequeue function', () => {
    expect(mQueue.dequeue()).toBe(5);
    expect(mQueue.dequeue()).toBe(13);
    expect(mQueue.dequeue()).toBe(17);
    expect(mQueue.dequeue()).toBe(27);
    expect(mQueue.isEmpty()).toBeTruthy();
    expect(mQueue.size()).toBe(0);
});