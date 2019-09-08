import { expect } from "chai"
import { describe } from "mocha"

import nice from "../../src/intenthq/NiceStrings"

describe("NiceStrings", () => {

  it("ugknbfddgicrmopn is nice", () => {
    expect(nice(["ugknbfddgicrmopn"])).to.equal(1)
  })

  it("aaa is nice", () => {
    expect(nice(["aaa"])).to.equal(1)
  })

  it("jchzalrnumimnmhp is naughty", () => {
    expect(nice(["jchzalrnumimnmhp"])).to.equal(0)
  })

  it("haegwjzuvuyypxyu is naughty", () => {
    expect(nice(["haegwjzuvuyypxyu"])).to.equal(0)
  })

  it("dvszwmarrgswjxmb is naughty", () => {
    expect(nice(["dvszwmarrgswjxmb"])).to.equal(0)
  })

})
