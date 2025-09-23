export const countNumber = (array) => {
  let negative = 0;
  let positive = 0;

  for (const num of array) {
    if (num >= 0) {
      positive++;
    } else {
      negative++;
    }
  }

  return { negative: negative, positive: positive };
};

export const func = (arr) => {
  let sumNum = 0;
  const sortArr = arr.sort((a, b) => a - b);
  for (const num of sortArr) {
    sumNum += num;
  }
  return { min: sortArr[0], max: sortArr[sortArr.length - 1], mid: sumNum / sortArr.length };
};

export const filter = (arr) => {
  const mans = [];
  const women = [];
  for (const n of arr) {
    if (n.gender === 'm' && n.age > 18) {
      mans.push(n.name);
    } else if (n.gender === 'f' && n.age > 20) {
      women.push(n.name);
    }
  }
  return { mans, women };
};
