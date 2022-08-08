// Primes
// Note: Working off the index values here for sanity
export const PRIMES_1_TO_200: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
export const MIN_INDEX = 0;
export const MAX_INDEX = 46 || PRIMES_1_TO_200.length - 1;

// Note: this function is NOT pure
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

// Note: this function is NOT pure
export const findPreviousPrimes = (index: number) => {
  if (!(index >= 1 && index <= MAX_INDEX)) {
    throw new Error('Index out of range');
  }
  const ret = [];

  for (let i = 0; i < index; i++) {
    ret.push(PRIMES_1_TO_200[i]);
  }

  return ret;
};

export const isPrime = (n: number): boolean => {
  // Corner cases
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i += 6) if (n % i == 0 || n % (i + 2) == 0) return false;

  return true;
};

export const getRandomPrime = (): [number, number] => {
  const index = Math.round(Math.random() * (MAX_INDEX));
  return [PRIMES_1_TO_200[index], index];
};
