// Factorials

export const getPrimeFactors = (n: number): number[] => {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  // Note: Right now this algorithm does not handle distinct values
  // so remove them before we return
  return factors.filter((item, pos, self) => self.indexOf(item) == pos);
};
