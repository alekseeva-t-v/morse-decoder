const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

/**
 * Возвращает декодированную строку.
 *
 * @param {string} expr Исходная строка, которую необходимо декодировать.
 * @return {string} Декодированная строка.
 */
function decode(expr) {
  let resArray = [];

  /**
   * Возвращает массив элементов, на которые будет разделена строка.
   *
   * @param {string} string Исходная строка, которую необходимо разделить.
   * @param {number} elemCoun Количество символов.
   * @return {array} массив элементов, на которые будет разделена строка.
   */
  function lineDivision(string, elemCount) {
    let data = string.split('');
    let substrArr = [];
    let resArr = [];

    for (let i = 0; i < data.length / elemCount; i++) {
      substrArr[i] = data
        .slice(i * elemCount, i * elemCount + elemCount)
        .join('');
      resArr.push(String(+substrArr[i]));
    }

    return resArr;
  }

  const codedLettersArray = lineDivision(expr, 10);

  console.log(codedLettersArray);

  codedLettersArray.forEach((value) => {
    if (value === 'NaN') {
      resArray.push(' ');
    } else {
      const codedCharactersArray = lineDivision(value, 2);
      const encodedCharactersString = codedCharactersArray
        .map((value) => {
          return value === '10' ? '.' : '-';
        })
        .join('');

      resArray.push(MORSE_TABLE[encodedCharactersString]);
    }
  });

  return resArray.join('');
}

module.exports = {
  decode,
};
