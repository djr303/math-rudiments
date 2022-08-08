// All previous primes tests
import { getQuestionAnswerSet } from "./allPreviousPrimes"
import { getPrimes, MIN_INDEX } from "../../../src/data/primes"

describe('All previous primes - allPreviousPrimes.ts', () => {
  describe('getQuestionAnswerSet()', () => {
    it('Should return correct number of questions and answer to \'all previous primes\' call', () => {

      const primes = getPrimes(MIN_INDEX, 3)
      const questionAnswerSet = getQuestionAnswerSet(primes, [3])

      console.log('questionAnswerSet', questionAnswerSet)

      const expectedValues = [
        ['2 * 3 = ?', 6],
        ['3 * 3 = ?', 9],
        ['5 * 3 = ?', 15],
        ['7 * 3 = ?', 21]
      ]

      expect(questionAnswerSet).toStrictEqual(expectedValues)
    })
  })
}) 