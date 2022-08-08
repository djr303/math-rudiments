// Index (Main)
// Note: Having to use 'require' here as TS complication does handle this library very well
const prompts = require('prompts')

import {
  getAdditionPair, getSubtractionPair, getMultiplicationPair, getDivisionPair, getPreviousPrimesSet, getPrimeFactorSet,
} from './lib/generators/index';
import { getRandomPrime, findPreviousPrimes } from './data/primes';
import { generateRandomInteger } from './lib/helpers';

const getValidationFunction = answer => value => value === answer ? true : 'That answer is incorrect.'

const getQuestions = () => {

  const questions: {
    type: string
    name: string,
    message: string,
    validate: (value: number) => boolean | string
  }[] = []

  // 2 Addition questions with all previous primes with 3 multipliers for each
  for (let i = 1; i <= 2; i++) {
    let [prime01, index01] = getRandomPrime();
    let [prime02, index02] = getRandomPrime();
    let additionQuestion = getAdditionPair(prime01, prime02)
    let allPreviousPrimes01 = getPreviousPrimesSet(findPreviousPrimes(index01 - 1), [generateRandomInteger(10)])
    let allPreviousPrimes02 = getPreviousPrimesSet(findPreviousPrimes(index02 - 1), [generateRandomInteger(10)])

    questions.push(
      {
        type: 'number',
        name: `Addition question ${i}`,
        message: additionQuestion[0],
        validate: getValidationFunction(additionQuestion[1])
      }
    )

    for (let x = 0; x < allPreviousPrimes01.length; x++) {
      questions.push({
        type: 'number',
        name: `Multiplication question ${i}.${x}`,
        message: allPreviousPrimes01[x][0],
        validate: getValidationFunction(allPreviousPrimes01[x][1])
      })
    }

    for (let x = 0; x < allPreviousPrimes02.length; x++) {
      questions.push({
        type: 'number',
        name: `Multiplication question ${i}.${x}`,
        message: allPreviousPrimes02[x][0],
        validate: getValidationFunction(allPreviousPrimes02[x][1])
      })
    }

    // 2 Subtraction questions with all previous primes with 3 multipliers for each
    let [prime03, index03] = getRandomPrime();
    let [prime04, index04] = getRandomPrime();
    let subtractionQuestion = getSubtractionPair(prime03, prime04)
    let allPreviousPrimes03 = getPreviousPrimesSet(findPreviousPrimes(index03 - 1), [generateRandomInteger(10)])
    let allPreviousPrimes04 = getPreviousPrimesSet(findPreviousPrimes(index04 - 1), [generateRandomInteger(10)])

    questions.push(
      {
        type: 'number',
        name: `Subtraction question ${i}`,
        message: subtractionQuestion[0],
        validate: getValidationFunction(subtractionQuestion[1])
      }
    )

    for (let x = 0; x < allPreviousPrimes03.length; x++) {
      questions.push({
        type: 'number',
        name: `Multiplication question ${i}.${x}`,
        message: allPreviousPrimes03[x][0],
        validate: getValidationFunction(allPreviousPrimes03[x][1])
      })
    }

    for (let x = 0; x < allPreviousPrimes04.length; x++) {
      questions.push({
        type: 'number',
        name: `Multiplication question ${i}.${x}`,
        message: allPreviousPrimes04[x][0],
        validate: getValidationFunction(allPreviousPrimes04[x][1])
      })
    }

    let [prime05] = getRandomPrime();
    let [prime06] = getRandomPrime();
    let multiplicationQuestion = getMultiplicationPair(prime05, prime06)
    let primeFactorsSet01 = getPrimeFactorSet(multiplicationQuestion[1], generateRandomInteger(10))


    // 2 Multiplication questions with all prime factors of answer with 3 multiplier questions for each
    questions.push(
      {
        type: 'number',
        name: `Multiplication question ${i}`,
        message: multiplicationQuestion[0],
        validate: getValidationFunction(multiplicationQuestion[1])
      }
    )

    for (let x = 0; x < primeFactorsSet01.length; x++) {
      questions.push({
        type: 'number',
        name: `Multiplication question ${i}.${x}`,
        message: primeFactorsSet01[x][0],
        validate: getValidationFunction(primeFactorsSet01[x][1])
      })
    }

    // 2 Division questions with all prime factors of x with 3 multiplier questions for each
    let [prime07] = getRandomPrime();
    let [prime08] = getRandomPrime();
    let divisionQuestion = getDivisionPair(prime07, prime08)
    let primeFactorsSet02 = getPrimeFactorSet(divisionQuestion[2], generateRandomInteger(10))

    questions.push(
      {
        type: 'number',
        name: `Division question ${i}`,
        message: divisionQuestion[0],
        validate: getValidationFunction(divisionQuestion[1])
      }
    )

    for (let x = 0; x < primeFactorsSet02.length; x++) {
      questions.push({
        type: 'number',
        name: `Prime factor question ${i}.${x}`,
        message: primeFactorsSet02[x][0],
        validate: getValidationFunction(primeFactorsSet02[x][1])
      })
    }
  } 

  return questions;
}

const main = async () => {
  const questions = getQuestions();
  console.log('Number of questions: ', questions.length)  

  for (let i = 0; i < questions.length; i++){
    await prompts(questions[i])
  }
};

main();
