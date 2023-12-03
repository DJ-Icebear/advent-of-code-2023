
export const numerify = (text: string): number[] => {
  // Important that replacement is done from left to right in order of appearance
  const onlyNumbers: number[] = []
  for (let i = 0; i < text.length; i++) {
    const letter = text[i]
    if (!isDigit(letter)) {
      if (text.substring(i, i + 3) === 'one') {
        onlyNumbers.push(1)
      } else if (text.substring(i, i + 3) === 'two') {
        onlyNumbers.push(2)
      } else if (text.substring(i, i + 5) === 'three') {
        onlyNumbers.push(3)
      } else if (text.substring(i, i + 4) === 'four') {
        onlyNumbers.push(4)
      } else if (text.substring(i, i + 4) === 'five') {
        onlyNumbers.push(5)
      } else if (text.substring(i, i + 3) === 'six') {
        onlyNumbers.push(6)
      } else if (text.substring(i, i + 5) === 'seven') {
        onlyNumbers.push(7)
      } else if (text.substring(i, i + 5) === 'eight') {
        onlyNumbers.push(8)
      } else if (text.substring(i, i + 4) === 'nine') {
        onlyNumbers.push(9)
      }
    } else {
      onlyNumbers.push(parseInt(letter))
    }
  }

  return onlyNumbers
};

export const getAnswer = (lines: Array<string>): number => lines.reduce((acc, line) => {
  const num = getFirstAndLastDigit(line);
  return acc + num;
}, 0);

const isDigit = (letter: string) => {
  return letter >= '0' && letter <= '9';
};

export const getFirstAndLastDigit = (text: string): number => {
  const numbersArray = numerify(text);

  const firstDigit = numbersArray[0];
  const lastDigit = numbersArray[numbersArray.length - 1];

  // add as strings
  const firstAndLast = firstDigit + '' + lastDigit 

  const number = parseInt(firstAndLast)
  if (isNaN(number)) throw new Error('firstAndLast joined is not a number')
  return number
}

