class AsyncQueue<T> {
    private queue: Array<Promise<T>>;
    private pending: boolean;

    constructor() {
        this.queue = [];
        this.pending = false;
    }

    async add(task: () => Promise<T>) {
        this.queue.push(task());
        if (!this.pending) {
            this.pending = true;
            while (this.queue.length) {
                await this.queue.shift();
            }
            this.pending = false;
        }
    }
}

export default AsyncQueue;