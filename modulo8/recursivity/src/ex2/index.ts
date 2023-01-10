export const calculateSum = (number: number, base: number = 0): number => {
    if (number === 0) {
      return base;
    }
    return calculateSum(number - 1, base + number);
  };