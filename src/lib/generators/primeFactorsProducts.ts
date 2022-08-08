// Prime factor products
import { getPrimeFactors } from '../../data/factorials';
import { getRandomPrime } from '../../data/primes';
import { QuestionAnswerSet } from './types';

export const getQuestionAnswerSet = (x: number, primeMultiplier: number): QuestionAnswerSet => {
  const ret = [];
  const primeFactors = getPrimeFactors(x);

  for (let i = 0; i < primeFactors.length; i++) {
    const answer = primeFactors[i] * primeMultiplier;
    const qStr = `${primeFactors[i]} * ${primeMultiplier} = ?`;
    ret.push([qStr, answer]);
  }

  return ret;
};
