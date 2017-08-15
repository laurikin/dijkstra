import Dijkstra from './src/dijkstra';

const edges = [
    [1,2],
    [0],
    [0,3],
    [2]
];

const paths = new Dijkstra(edges, 0);
const shortestPathTo3 = paths.getPath(3) // -> [2,3];

console.log(shortestPathTo3);
