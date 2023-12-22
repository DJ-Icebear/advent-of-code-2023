import { expect, describe, it } from "bun:test";
import { fileLinesToArray } from "../../file_io/file";


const getAnswer = (lines: string[]) => {
  lines.forEach(line => {
    const numbers = line.split('.')
    numbers.forEach(number => {
      console.log(number)
    })
  })

  // Get each number and their position in the line
  // Get all the positions we need to look at for each number
  // If the value of all of those positions are dots, then it's a "part number"
  
  return 0
}

describe.skip("Day 2 task 1", () => {
  it("sample input gives correct output", async () => {

    const lines = await fileLinesToArray('./day-3/task1/sample.txt')

    const answer = getAnswer(lines)
    expect(answer).toBe(4361);
  });
});
