export default class MinPriorityQueue {

    constructor() {
        this.data = [];
    }

    insert(element, priority) {
        this.data.push([element, priority]);
    }

    updateElement(element, priority) {
        for (let i = 0; i < this.data.length; i += 1) {
            if (this.data[i][0] === element) {
                this.data[i] = [element, priority];
                break;
            }
        }
    }

    contains(element) {
        return this.data.some(e => e[0] === element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const minElInd = this.data.reduce((acc, el, i) => (
            this.data[acc][1] > el[1] ? i : acc
        ), 0);

        const minEl = this.data[minElInd];

        this.data.splice(minElInd, 1);

        return minEl[0];
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

