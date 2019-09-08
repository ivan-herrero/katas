import { describe } from "mocha"
import { expect } from "chai"

import decipher from "../../src/intenthq/Enigma"

describe("Enigma", () => {

  const ihqDict = new Map([[23, "N"], [234, " "], [89, "H"], [78, "Q"], [37, "A"]])
  const ihqEnigma = decipher(ihqDict)

  it("(2,3) is 'N'", () => {
    expect(ihqEnigma([2, 3])).to.equal("N")
  })

  it("(2,3,8,9) is 'NH'", () => {
    expect(ihqEnigma([2, 3, 8, 9])).to.equal("NH")
  })

  it("(1,2,3) is '1N'", () => {
    expect(ihqEnigma([1, 2, 3])).to.equal("1N")
  })

  it("(2,3,4) is ' '", () => {
    expect(ihqEnigma([2, 3, 4])).to.equal(" ")
  })

  it("(1,2,3,7,3,2,3,7,2,3,4,8,9,7,8) is '1N73N7 HQ'", () => {
    expect(ihqEnigma([1, 2, 3, 7, 3, 2, 3, 7, 2, 3, 4, 8, 9, 7, 8])).to.equal("1N73N7 HQ")
  })

})
