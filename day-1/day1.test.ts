import { expect, test, describe, it } from "bun:test";
import { fileLinesToArray } from "../file_io/file";

const getFirstAndLastDigit = (text: string): number => {
  // loop through each character in the string
  let numberString = ''

  for (const letter of text) {
    if (isChar(letter)) {
      numberString += letter
    }
  }

  const firstAndLast = numberString[0] + numberString[numberString.length - 1]

  return parseInt(firstAndLast)
}

const getAnswer = (lines: Array<string>): number =>
  lines.reduce((acc, line) => {
    const num = getFirstAndLastDigit(line)
    return acc + num
  }, 0)

describe("Day 1", () => {
  it("Task 1 sample input should give correct output", async () => {

    const lines = await fileLinesToArray('./day-1/sample.txt')

    const answer = getAnswer(lines)
    expect(answer).toBe(142);
  });
});

const isChar = (letter: string) => {
  return letter >= '0' && letter <= '9'
};

