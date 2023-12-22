import { expect, describe, it } from "bun:test";
import { fileLinesToArray } from "../../file_io/file";


const getAnswer = (lines: string[]): number => {
  return 42
}

describe.skip("Day 2 task 1", () => {
  it("sample input gives correct output", async () => {
    const lines = await fileLinesToArray('./day_x/task_1/sample.txt')

    const answer = getAnswer(lines)
    expect(answer).toBe(1234);
  });


  // it("input file gives correct output", async () => {
  //   const lines = await fileLinesToArray('./day_x/input.txt')

  //   const answer = getAnswer(lines)
  //   expect(answer).toBe(1234);
  // });
});
