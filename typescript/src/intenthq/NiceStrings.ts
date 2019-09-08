// From https://github.com/intenthq/code-challenges/blob/master/java_scala/src/main/scala/com/intenthq/challenge/SNiceStrings.scala

// From http://adventofcode.com/day/5
//  --- Day 5: Doesn't He Have Intern-Elves For This? ---
//
//  Santa needs help figuring out which strings in his text file are naughty or nice.
//
//    A nice string is one with all of the following properties:
//
//    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//  It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
//    For example:
//
//    ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
//  aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
//    jchzalrnumimnmhp is naughty because it has no double letter.
//    haegwjzuvuyypxyu is naughty because it contains the string xy.
//    dvszwmarrgswjxmb is naughty because it contains only one vowel.
//    How many strings are nice?

export default (xs: string[]): number => {
  const threeVowelsReg = new RegExp("([aeiou].*){3,}");
  const twiceInARowReg = new RegExp("([a-zA-Z])\\1");
  const containsPairsReg = new RegExp("ab|cd|pq|xy");

  const threeVowels = (s: string): boolean => threeVowelsReg.test(s);
  const twiceInARow = (s: string): boolean => twiceInARowReg.test(s);
  const containsPairs = (s: string): boolean => containsPairsReg.test(s);

  const isNice = (s: string): boolean => threeVowels(s) && twiceInARow(s) && !containsPairs(s);

  return xs.map(isNice).filter(x => x).length;
}
