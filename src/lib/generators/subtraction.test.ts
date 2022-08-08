// Subtraction tests
import { getQuestionAnswer } from './subtraction'

describe('subtraction.ts', () => {
  describe('getQuestionAnswer(x: number, y: number)', () => {
    it(`Should generate correct 'questionAnswer' from function call`, () => {
      const questionAnswer = getQuestionAnswer(2, 1)
      expect(questionAnswer).toStrictEqual([`2 - 1 = ?`, 1])
    })
  })
})