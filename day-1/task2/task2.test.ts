import { expect, describe, it } from "bun:test";
import { fileLinesToArray } from "../../file_io/file";
import { getAnswer } from "./getAnswer";
import { getFirstAndLastDigit } from "./getAnswer";

describe("Day 1 task 2", () => {
  it("Task 1 sample input should give correct output", async () => {

    const lines = await fileLinesToArray('./day-1/task2/sample.txt')

    const answer = getAnswer(lines)
    expect(answer).toBe(281);
  });

    it("Task 2 full file input should give correct output", async () => {

    const lines = await fileLinesToArray('./day-1/task1/input.txt')

    const answer = getAnswer(lines)

    expect(answer).toBe(54518);
  });
});



describe("getFirstAndLastDigit", () => {
  it("should handle two lettered numbers in one text", async () => {
    const answer = getFirstAndLastDigit('two1nine')
    expect(answer).toBe(29);
  });

  it("should handle three lettered numbers in one text", async () => {
    const answer = getFirstAndLastDigit('eightwothree')
    expect(answer).toBe(83);
  });

  it("should handle two lettered numbers in one text", async () => {
    const answer = getFirstAndLastDigit('abcone2threexyz')
    expect(answer).toBe(13);
  });

  it("should handle single lettered numbers", async () => {
    const answer = getFirstAndLastDigit('6tgsl')
    expect(answer).toBe(66);
  });

  it("should handle two lettered numbers", async () => {
    const answer = getFirstAndLastDigit('mjsjpone9')
    expect(answer).toBe(19);
  });

  it("should handle only one lettered numbers", async () => {
    const answer = getFirstAndLastDigit('bgcxqff8')
    expect(answer).toBe(88);
  });

  it("should handle only one lettered numbers", async () => {
    const answer = getFirstAndLastDigit('1zktcvtrknt')
    expect(answer).toBe(11);
  });

  it("should handle numbers with letters combined 1", async () => {
    const answer = getFirstAndLastDigit('eighthree')
    expect(answer).toBe(83);
  });

  it("should handle numbers with letters combined 1", async () => {
    const answer = getFirstAndLastDigit('sevenine')
    expect(answer).toBe(79);
  });


  it("should handle numbers with letters combined 1", async () => {
    const answer = getFirstAndLastDigit('3mlfdone42')
    expect(answer).toBe(32);
  });
});
