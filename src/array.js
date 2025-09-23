export const logJoin = (array, join) => {
  console.log(array.join(join));
};

const user = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };

export const setNickname = (user, nick) => {
  const oldNickname = user.nickname;
  user.nicknameHistory.push(oldNickname);
  user.nickname = nick;
  console.log(user);
};

export const getRandomItem = (arr) => {
  console.log(arr[Math.floor(Math.random() * arr.length)]);
};

export const add = (arr, item) => {
  if (!arr.includes(item)) {
    arr.push(item);
  }
  console.log(arr);
};
