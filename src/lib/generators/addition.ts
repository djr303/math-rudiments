// Addition
import { QuestionAnswer } from './types';

export const getQuestionAnswer = (x: number, y: number): QuestionAnswer => {
  const answer = x + y;
  const qStr = `${x} + ${y} = ?`;
  return [qStr, answer];
};
