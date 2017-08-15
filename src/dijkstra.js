import MinPriorityQueue from './minPriorityQueue';

export default class Dijkstra {

    /**
     * Edges is an array where index is the id of a node
     * and the value is an array of adjacent nodes
     *
     * example
     *
     * const edges = [
     *  [1,2],
     *  [0],
     *  [0,3],
     *  [2]
     * ]
     *
     * Describes a graph of the following form
     *
     *  0----1
     *   \
     *    \2-----3
     *
     *
     * start is the node from which we calculate the paths to all other nodes
     *
     * Usage
     *
     * const paths = new Dijkstra(edges, 0);
     * paths.getPath(3) // -> [2,3];
     *
     */

    constructor(edges, start) {
        this.start = start;
        this.edgeTo = [];
        this.pq = new MinPriorityQueue();

        this.distTo = edges.map(() => Number.MAX_SAFE_INTEGER);
        this.distTo[start] = 0;

        this.pq.insert(start, 0);

        while (!this.pq.isEmpty()) {
            const from = this.pq.pop();
            for (let i = 0; i < edges[from].length; i += 1) {
                const to = edges[from][i];

                /* we assume that the weight of the edge is always 1 */
                if (this.distTo[to] > this.distTo[from] + 1) {
                    this.distTo[to] = this.distTo[from] + 1;
                    this.edgeTo[to] = from;
                    if (this.pq.contains(to)) {
                        this.pq.updateElement(to, this.distTo[to]);
                    } else {
                        this.pq.insert(to, this.distTo[to]);
                    }
                }
            }
        }
    }

    /*
     * returns the nodes from this.start to dest
     */

    getPath(dest) {
        const path = [dest];
        let node = dest;
        while (node !== this.start) {
            const next = this.edgeTo[node];
            if (next !== this.start) {
                path.push(next);
            }

            if (next === null || next === undefined) {
                console.error('Pathfinding error: start and dest are not connected');
                console.error('start: ', this.start);
                console.error('dest: ', dest);
                return [];
            }

            node = next;
        }

        path.reverse();

        return path;
    }

}

