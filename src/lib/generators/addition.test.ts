// Addition tests
import { getQuestionAnswer } from './addition'

describe('addition.ts', () => {
  describe('getQuestionAnswer(x: number, y: number)', () => {
    it(`Should generate correct 'questionAnswer' from function call`, () => {
      const questionAnswerSet = getQuestionAnswer(1, 2)
      expect(questionAnswerSet).toStrictEqual([`1 + 2 = ?`, 3])
    })
  })
})