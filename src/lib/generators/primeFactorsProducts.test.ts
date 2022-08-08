// Prime factor products tests
import { getRandomPrime } from '../../../src/data/primes'
import { getQuestionAnswerSet } from './primeFactorsProducts'

describe('Prime factor products - primeFactorProducts.ts', () => {
  describe('getQuestionAnswerSet()', () => {
    it('Should produce correct question and answer set for non prime number', () => {
      const [randomPrime, _] = getRandomPrime()
      const testableResult = getQuestionAnswerSet(100, randomPrime)
      const answer1 = 2 * randomPrime;
      const answer2 = 5 * randomPrime;
      expect(testableResult).toStrictEqual([
        [`2 * ${randomPrime} = ?`, answer1],
        [`5 * ${randomPrime} = ?`, answer2]
      ])
    })
  })
})