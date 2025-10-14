/*
Фраза
the quick brown fox jumps over the lazy dog

содержит все буквы английского алфавита.

Я перемешал обычный алфавит и создал свой алфавит, который замещает одни английские буквы другими.
Вот та же самая фраза, но записанная с помощью нового алфавита:
oak lgypb wited zts qgfch tuki oak mjrn xtv

Используя эти данные, расшифруйте фразу ниже.
Если в фразе встретились символы, которые не удалось декодировать - оставьте эти символы без изменения.
ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!
 */
const phrase1 = 'the quick brown fox jumps over the lazy dog'.split('');
const phrase2 = 'oak lgypb wited zts qgfch tuki oak mjrn xtv'.split('');
const phrase3 = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!'.split('');

const phraseObj = {};

for (let i = 0; i < phrase1.length; i++) {
  phraseObj[phrase2[i]] = phrase1[i];
}

const result = phrase3
  .map((char) => {
    if (phraseObj[char]) {
      return phraseObj[char];
    } else {
      return char;
    }
  })
  .join('');

console.log(result);
