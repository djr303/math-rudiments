// Multiplication tests
import { getQuestionAnswer } from './multiplication'

describe('multiplication.ts', () => {
  describe('getQuestionAnswer(x: number, y: number)', () => {
    it(`Should generate correct 'questionAnswer' from function call`, () => {
      const questionAnswer = getQuestionAnswer(2, 4)
      expect(questionAnswer).toStrictEqual([`2 * 4 = ?`, 8])
    })
  })
})