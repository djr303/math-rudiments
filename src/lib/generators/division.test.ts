// Division tests
import { getQuestionAnswer } from './division'

describe('division.ts', () => {
  describe('getQuestionAnswer(x: number, y: number)', () => {
    it(`Should generate correct 'questionAnswer' from function call`, () => {
      const questionAnswer = getQuestionAnswer(3, 2)
      expect(questionAnswer).toStrictEqual([`6 / 2 = ?`, 3, 6])
    })
  })
})