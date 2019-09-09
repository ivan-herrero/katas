// From https://github.com/intenthq/code-challenges/blob/master/java_scala/src/main/scala/com/intenthq/challenge/SEnigma.scala

// We have a system to transfer information from one place to another. This system
// involves transferring only list of digits greater than 0 (1-9). In order to decipher
// the message encoded in the list you need to have a dictionary that will allow
// you to do it following a set of rules:
//    > Sample incoming message: (​1,2,3,7,3,2,3,7,2,3,4,8,9,7,8)
//    > Sample dictionary (​23->‘N’,234->‘ ’,89->‘H’,78->‘Q’,37 ->‘A’)
//  - Iterating from left to right, we try to match sublists to entries of the map.
//    A sublist is a sequence of one or more contiguous entries in the original list,
//    eg. the sublist (1, 2) would match an entry with key 12, while the sublist (3, 2, 3)
//    would match an entry with key 323.
//  - Whenever a sublist matches an entry of the map, it’s replaced by the entry value.
//    When that happens, the sublist is consumed, meaning that its elements can’t be used
//    for another match. The elements of the mapping however, can be used as many times as needed.
//  - If there are two possible sublist matches, starting at the same point, the longest one
//    has priority, eg 234 would have priority over 23.
//  - If a digit does not belong to any matching sublist, it’s output as is.
//
// Following the above rules, the message would be: “1N73N7 HQ”
// Check the tests for some other (simpler) examples.

type DictEntry = [number, string]

export default (map: Map<number, string>) => (message: number[]): string => {
  const sortByLongestKey = (a: DictEntry, b: DictEntry) => {
    const aKeyLength = a[0].toString().length
    const bKeyLength = b[0].toString().length
    return aKeyLength === bKeyLength ? 0 : aKeyLength > bKeyLength ? -1 : 1
  }

  let translation = message.reduce((prev, curr) => prev + curr, "")

  Array.from(map).sort(sortByLongestKey).forEach(([key, value]) =>
    translation = translation.replace(new RegExp(key.toString(), "g"), value)
  )

  return translation
}
