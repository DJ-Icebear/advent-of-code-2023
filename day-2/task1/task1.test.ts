import { expect, describe, it } from "bun:test";
import { fileLinesToArray } from "../../file_io/file";
import { getAnswer } from "./getAnswer";

describe("Day 2 task 1", () => {
  it("sample input gives correct output", async () => {

    const lines = await fileLinesToArray('./day-2/task1/sample.txt')

    const maxCubes = {
      red: 12,
      green: 13,
      blue: 14
    }

    const answer = getAnswer(lines, maxCubes)
    expect(answer).toBe(8);
  });

  it("full input gives correct output", async () => {

    const lines = await fileLinesToArray('./day-2/task1/input.txt')

    const maxCubes = {
      red: 12,
      green: 13,
      blue: 14
    }

    const answer = getAnswer(lines, maxCubes)
    expect(answer).toBe(2593);
  });
});
