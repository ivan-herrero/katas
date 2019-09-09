import { expect } from "chai"
import { describe } from "mocha"

import run, { Node } from "../../src/intenthq/ConnectedGraph"

describe("SConnectedGraph", () => {

  it("should work with an acyclic graph", () => {
    const dest = new Node(9)
    const n10 = new Node(10)
    const n8 = new Node(8, [dest])

    const start = new Node(3, [n8, n10])
    const start2 = new Node(11, [new Node(2), dest, n10])
    const start3 = new Node(5, [start2])

    expect(run(start, dest)).to.equal(true)
    expect(run(start2, dest)).to.equal(true)
    expect(run(start, dest)).to.equal(true)
    expect(run(start2, dest)).to.equal(true)
    expect(run(start3, dest)).to.equal(true)
    expect(run(dest, start3)).to.equal(false)
    expect(run(dest, start2)).to.equal(false)
    expect(run(start, start2)).to.equal(false)
  })

  it("a node is connected to itself", () => {
    const start = new Node(1)
    expect(run(start, start)).to.equal(true)
  })

})
