// Primes tests
import { MAX_INDEX, MIN_INDEX, PRIMES_1_TO_200, getPrimes, isPrime, getRandomPrime } from './primes'

const resultingError = new Error('Indexes out of range')

describe('Primes - primes.ts', () => {
  describe('getPrimes(indexMin: number, indexMax: number)', () => {
    it(`Should throw an 'Indexes out of range' error when 'indexMin' argument is not in range`, () => {
      const indexMax = MAX_INDEX

      let indexMin = -1

      const test01 = () => {
        const testableValue = getPrimes(indexMin, indexMax)
      };

      expect(test01).toThrow(resultingError);

      indexMin = MAX_INDEX + 1

      const test02 = () => {
        const testableValue = getPrimes(indexMin, indexMax)
      }

      expect(test02).toThrow(resultingError)
    })

    it(`Should throw an 'Indexes out of range' error when 'indexMax' argument is not in range`, () => {
      const indexMin = MIN_INDEX

      let indexMax = -1

      const test01 = () => {
        const testableValue = getPrimes(indexMin, indexMax)
      };

      expect(test01).toThrow(resultingError);

      indexMax = MAX_INDEX + 1

      const test02 = () => {
        const testableValue = getPrimes(indexMin, indexMax)
      }

      expect(test02).toThrow(resultingError)
    })

    it(`Should return correct values in sub set based on 'In range indexes'`, () => {
      const indexMin = MIN_INDEX + 7
      const indexMax = MAX_INDEX - 7

      const testableValue = getPrimes(indexMin, indexMax)

      const primes = [...PRIMES_1_TO_200]
      const expectedValue = primes.reduce((a, c, i) => {
        i >= indexMin && i <= indexMax ? a.push(c) : void 0
        return a
      }, [])

      expect(testableValue).toStrictEqual(expectedValue)
    })
  })

  describe('isPrime(n: number)', () => {
    it(`Should return 'true' when numbers are prime`, () => {
      let p = PRIMES_1_TO_200[MIN_INDEX]
      expect(isPrime(p)).toBe(true)

      p = PRIMES_1_TO_200[MAX_INDEX]
      expect(isPrime(p)).toBe(true)
    })

    it(`Should return 'false' when numbers are not prime`, () => {
      let x = 4
      expect(isPrime(x)).toBe(false)

      x = 4 ** 4
      expect(isPrime(x)).toBe(false)
    })
  })

  describe('PRIMES_1_TO_200 (Value array)', () => {
    it(`Should return false for all values in 'primes' is array`, () => {
      for (let i = MIN_INDEX; i <= MAX_INDEX; i++){
        expect(isPrime(PRIMES_1_TO_200[i])).toBe(true)
      }
    })
  })

  describe('getRandomPrime()', () => {
    it('Should return randomly selected prime number from value array', () => {
      const [testableValue, _] = getRandomPrime();

      expect(PRIMES_1_TO_200.indexOf(testableValue)).toBeGreaterThan(-1)
    })
  })
})