// From https://github.com/intenthq/code-challenges/blob/master/java_scala/src/main/scala/com/intenthq/challenge/SConnectedGraph.scala

// Find if two nodes in a directed graph are connected.
// Based on http://www.codewars.com/kata/53897d3187c26d42ac00040d
// For example:
// a -+-> b -> c -> e
//    |
//    +-> d
// run(a, a) == true
// run(a, b) == true
// run(a, c) == true
// run(b, d) == false

export class Node {
  value: number
  edges: Node[]

  constructor(value: number, edges: Node[] = []) {
    this.value = value
    this.edges = edges
  }
}

export default (source: Node, target: Node): boolean => {
  const areContiguous = (): boolean => source.edges.map(e => e.value).includes(target.value)

  const areConnected = (): boolean => {
    const flattenEdges = (node: Node): number[] => node.edges.reduce(
      (acc, currentNode) => [...acc, currentNode.value, ...flattenEdges(currentNode)],
      Array<number>())

    return flattenEdges(source).includes(target.value)
  }

  if (source === target || areContiguous() || areConnected())
    return true

  return false
}
