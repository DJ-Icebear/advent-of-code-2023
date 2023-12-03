import { expect, describe, it } from "bun:test";
import { fileLinesToArray } from "../../file_io/file";
import { getAnswer } from "./getAnswer";

describe("Day 2 task 1", () => {
  it("sample input gives correct output", async () => {

    const lines = await fileLinesToArray('./day-2/task1/sample.txt')

    const answer = getAnswer(lines)
    expect(answer).toBe(2286);
  });

  it("full input gives correct output", async () => {

    const lines = await fileLinesToArray('./day-2/task1/input.txt')

    const answer = getAnswer(lines)
    expect(answer).toBe(54699);
  });
});
