// Index (Main)
// Note: Having to use 'require' here as TS complication does handle this library very well
const prompts = require('prompts')
const { program } = require('commander');

type Addition = 'addition'
type Subtraction = 'subtraction'
type Multiplication = 'multiplication'
type Division = 'division'

type QuestionType = Addition | Subtraction | Multiplication | Division

import {
  getAdditionPair, getSubtractionPair, getMultiplicationPair, getDivisionPair, getPreviousPrimesSet, getPrimeFactorSet,
} from './lib/generators/index';
import { /* getRandomPrime, */ findPreviousPrimes, getSinglePrimeOfSubset } from './data/primes';
import { generateRandomInteger } from './lib/helpers';

const getValidationFunction = answer => value => value === answer ? true : 'That answer is incorrect.'

const getQuestions = (questionType: QuestionType, numberOfQuestions: number, primeSet: number) => {

  const questions: {
    type: string
    name: string,
    message: string,
    validate: (value: number) => boolean | string
  }[] = []

  switch (questionType) {
    case 'addition':
      for (let i = 1; i <= numberOfQuestions; i++) {
        let [prime01, index01] = getSinglePrimeOfSubset(primeSet);
        let [prime02, index02] = getSinglePrimeOfSubset(primeSet);

        let additionQuestion = getAdditionPair(prime01, prime02)
        let allPreviousPrimes01 = getPreviousPrimesSet(findPreviousPrimes(index01), [generateRandomInteger(100)])
        let allPreviousPrimes02 = getPreviousPrimesSet(findPreviousPrimes(index02), [generateRandomInteger(100)])

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
      }
      break;
    case 'subtraction':
      for (let i = 1; i <= numberOfQuestions; i++) {
        let [prime01, index01] = getSinglePrimeOfSubset(primeSet);
        let [prime02, index02] = getSinglePrimeOfSubset(primeSet);

        let subtractionQuestion = getSubtractionPair(prime01, prime02)
        let allPreviousPrimes01 = getPreviousPrimesSet(findPreviousPrimes(index01), [generateRandomInteger(100)])
        let allPreviousPrimes02 = getPreviousPrimesSet(findPreviousPrimes(index02), [generateRandomInteger(100)])

        questions.push(
          {
            type: 'number',
            name: `Subtraction question ${i}`,
            message: subtractionQuestion[0],
            validate: getValidationFunction(subtractionQuestion[1])
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
      }
      break;

    case 'multiplication':
      for (let i = 1; i <= numberOfQuestions; i++) {
        let [prime01, index01] = getSinglePrimeOfSubset(primeSet);
        let [prime02, index02] = getSinglePrimeOfSubset(primeSet);

        let multiplicationQuestion = getMultiplicationPair(prime01, prime02)
        let allPreviousPrimes01 = getPreviousPrimesSet(findPreviousPrimes(index01), [generateRandomInteger(100)])
        let allPreviousPrimes02 = getPreviousPrimesSet(findPreviousPrimes(index02), [generateRandomInteger(100)])

        questions.push(
          {
            type: 'number',
            name: `Multiplication question ${i}`,
            message: multiplicationQuestion[0],
            validate: getValidationFunction(multiplicationQuestion[1])
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
      }
      break;
    case 'division':
      for (let i = 1; i <= numberOfQuestions; i++) {
        let [prime01, index01] = getSinglePrimeOfSubset(primeSet);
        let [prime02, index02] = getSinglePrimeOfSubset(primeSet);

        let divisionQuestion = getDivisionPair(prime01, prime02)
        let allPreviousPrimes01 = getPreviousPrimesSet(findPreviousPrimes(index01), [generateRandomInteger(100)])
        let allPreviousPrimes02 = getPreviousPrimesSet(findPreviousPrimes(index02), [generateRandomInteger(100)])

        questions.push(
          {
            type: 'number',
            name: `Division question ${i}`,
            message: divisionQuestion[0],
            validate: getValidationFunction(divisionQuestion[1])
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
      }
      break;
  }

  return questions
}

const main = async (questionType: QuestionType, numberOfQuestions: number, primeSet: number) => {
  const questions = getQuestions(questionType, numberOfQuestions, primeSet);

  for (let i = 0; i < questions.length; i++) {
    await prompts(questions[i])
  }
};

program.arguments('<questionType>', 'Question type to produce (One of). Options are: addition | subtraction | multiplication | division')
program.arguments('<numberOfQuestions>', 'Number of questions', (v: string) => parseInt(v))
program.arguments('<primes>', 'Number of primes in the question set', (v: string) => parseInt(v))

const raw = program.parse();

main(raw.args[0], raw.args[1], raw.args[2]);
