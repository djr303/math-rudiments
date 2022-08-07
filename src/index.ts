const colors = require('colors');

const generateFixed = (factor, toFixed) => parseInt(Math.round(Math.random() * factor).toFixed(toFixed));

const generateAdditionProblem = (factor, toFixed) => {
  const x = generateFixed(factor, toFixed);
  const y = generateFixed(factor, toFixed);
  const answer = x + y;
  return [`${x} + ${y}`, `${answer}`];
};
const generateSubtractionProblem = (factor, toFixed) => {
  const x = generateFixed(factor, toFixed);
  const y = generateFixed(factor, toFixed);
  const answer = x - y;
  return [`${x} - ${y}`, `${answer}`];
};
const generateMultiplicationProblem = (factor, toFixed) => {
  const x = generateFixed(factor, toFixed);
  const y = generateFixed(factor, toFixed);
  const answer = x * y;
  return [`${x} * ${y}`, `${answer}`];
};
const generateDivisionProblem = (factor, toFixed) => {
  const x = generateFixed(factor[0], toFixed);
  let y = generateFixed(factor[1], toFixed);
  y = y !== 0 ? y : 1;
  const z = x * y;
  const answer = x;
  return [`${z} / ${y}`, `${answer}`];
};

const createQuestions = (s) => {
  const ret = [];

  for (let i = 0; i < s.length; i++) {
    for (let x = 1; x <= s[i][1]; x++) {
      switch (s[i][0]) {
        case ADDITION:
          ret.push(generateAdditionProblem(s[i][2], s[i][3]));
          break;
        case SUBTRACTION:
          ret.push(generateSubtractionProblem(s[i][2], s[i][3]));
          break;
        case MULTIPLICATION:
          ret.push(generateMultiplicationProblem(s[i][2], s[i][3]));
          break;
        case DIVISION:
          ret.push(generateDivisionProblem(s[i][2], s[i][3]));
          break;
        default:
          continue;
      }
    }
  }

  return ret;
};

const keyPressContinue = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) => process.stdin.once('data', () => {
    process.stdin.setRawMode(false);
    resolve();
  }));
};

const main = async () => {
  const questions = createQuestions(settings);

  for (let i = 0; i < questions.length; i++) {
    console.log(`${questions[i][0]} = ?\n`.red);
    await keyPressContinue();
    console.log(`${questions[i][1]}\n\n`.yellow);
    await keyPressContinue();
  }

  console.log('Finished!'.green);
};

(async () => {
  await main();
})().then(process.exit);
