export const PRIMES_1_TO_200: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
export const MIN_INDEX = 0;
export const MAX_INDEX = 46 || PRIMES_1_TO_200.length - 1;

export const getPrimes = (indexMin: number, indexMax: number) => {
  if (!(indexMin >= 0 && indexMin <= MAX_INDEX && indexMax >= 0 && indexMax <= MAX_INDEX)) {
    throw new Error('Indexes out of range');
  }

  const ret = [];

  for (let i = indexMin; i <= indexMax; i++) {
    ret.push(PRIMES_1_TO_200[i]);
  }

  return ret;
};
