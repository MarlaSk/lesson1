import chalk from 'chalk';

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

export const roundNumber = (arr) => {
  const positiveNum = [];

  arr.forEach((n, i) => {
    if (n >= 0) {
      positiveNum.push(i);
    }
  });

  const lastNum = positiveNum.slice(-3);

  return arr.map((n, i) => {
    if (n >= 0 && !lastNum.includes(i)) {
      return Math.round(n);
    }
    return n;
  });
};

export const colorOutput = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 1) {
      console.log(chalk.green(i));
    } else if (i % 3 === 2) {
      console.log(chalk.yellow(i));
    } else {
      console.log(chalk.red(i));
    }
  }
};

export const printColorOutput = (obj) => {
  for (const key in obj) {
    console.log(`${chalk.red(key)}: ${chalk.yellow(obj[key])}`);
  }
};

export const outputTable = (arr) => {
  for (const row of arr) {
    console.log(row.join('\t'));
  }
};

export const findAge = (arr) => {
  const ageCount = {};

  arr.forEach((user) => {
    if (!ageCount[user.age]) {
      ageCount[user.age] = 0;
    }
    ageCount[user.age]++;
  });
  console.log(ageCount);

  for (const age in ageCount) {
    console.log(`Возраст=${age}. Количество людей=${ageCount[age]}`);
  }

  return ageCount;
};

export const compareArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
    }
  }

  console.log(true);
};
