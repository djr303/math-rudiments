// Factorials tests
import { getPrimeFactors } from './factorials'

describe('Factorials - factorials.ts', () => {
  describe('primeFactors()', () => {
    it('Should return prime factors of given number', () => {
      const testableValue = getPrimeFactors(100)
      expect(testableValue).toStrictEqual([2, 5])
    })
  })
})