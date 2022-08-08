// Division

export const getQuestionAnswer = (prime: number, y: number): any => {
  const x = prime * y;
  const qStr = `${x} / ${y} = ?`;
  return [qStr, prime, x];
};
