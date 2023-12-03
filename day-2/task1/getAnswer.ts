export interface BagContents {
  red: number;
  green: number;
  blue: number;
}

export const getAnswer = (lines: string[], maxCubes: BagContents): number => {
  return lines.reduce((acc, line) => {
    const isIdValid = isGameValid(line, maxCubes);
    return acc + isIdValid;
  }, 0);
};

const isGameValid = (line: string, maxCubes: BagContents): number => {
  const [id, rounds] = line.split(': ');

  const [redMax, greenMax, blueMax] = getMaxCubes(rounds);

  const isGamePossible = (redMax <= maxCubes.red && greenMax <= maxCubes.green && blueMax <= maxCubes.blue)

  const idNumber = parseInt(id.split(' ')[1]);

  return isGamePossible ? idNumber : 0;
};

const getMaxCubes = (rounds: string): [number, number, number] => {
  return rounds.split(';').reduce((acc, round) => {
    round = round.trim();

    const colors = round.split(', ');


    colors.forEach(color => {
      const [cubes, colorName] = color.split(' ');
      const numberCubes = parseInt(cubes);

      if (colorName === 'red' && numberCubes > acc[0]) {
        acc[0] = numberCubes;
      }
      if (colorName === 'green' && numberCubes > acc[1]) {
        acc[1] = numberCubes;
      }
      if (colorName === 'blue' && numberCubes > acc[2]) {
        acc[2] = numberCubes;
      }
    });

    return acc;
  }, [0, 0, 0]); // red, green, blue
};
