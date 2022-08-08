// All previous primes
import { QuestionAnswerSet } from './types';

// Note: using max here as max as 0 to 'max' of integer based factors
export const getQuestionAnswerSet = (previousPrimes: number[], multiples: number[]) => {
  const ret: QuestionAnswerSet = [];

  for (let i = 0; i < previousPrimes.length; i++) {
    for (let x = 0; x < multiples.length; x++) {
      const answer = previousPrimes[i] * multiples[x];
      const qStr = `${previousPrimes[i]} * ${multiples[x]} = ?`;
      ret.push([qStr, answer]);
    }
  }
  return ret;
};
