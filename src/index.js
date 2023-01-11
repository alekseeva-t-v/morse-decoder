const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // Создаем массив в который будет выведен результат состоящий из группы подмассивов по 10 цифр
  let substr = [];
  // Создаем массив в который будет выведен результат состоящий из группы подмассивов
  let array = [];
  // Создаем результирующий массив, состаящий из элементов объединенных подмассивов
  let res = [];
  // Преобразуем полученную строку в массив
  let data = expr.split('');
  // Разделяем изначальный массив на группу подмассивов
  for (let i = 0; i < data.length / 10; i++) {
    substr[i] = data.slice(i * 10, i * 10 + 10).join('');
    array.push(String(+substr[i]));
  }

  for (let elem of array) {
    if (elem === '1011') {
      elem = MORSE_TABLE['.-'];
      res.push(elem);
    }
    if (elem === '11101010') {
      elem = MORSE_TABLE['-...'];
      res.push(elem);
    }
    if (elem === '11101110') {
      elem = MORSE_TABLE['-.-.'];
      res.push(elem);
    }
    if (elem === '111010') {
      elem = MORSE_TABLE['-..'];
      res.push(elem);
    }
    if (elem === '10') {
      elem = MORSE_TABLE['.'];
      res.push(elem);
    }
    if (elem === '10101110') {
      elem = MORSE_TABLE['..-.'];
      res.push(elem);
    }
    if (elem === '111110') {
      elem = MORSE_TABLE['--.'];
      res.push(elem);
    }
    if (elem === '10101010') {
      elem = MORSE_TABLE['....'];
      res.push(elem);
    }
    if (elem === '1010') {
      elem = MORSE_TABLE['..'];
      res.push(elem);
    }
    if (elem === '10111111') {
      elem = MORSE_TABLE['.---'];
      res.push(elem);
    }
    if (elem === '111011') {
      elem = MORSE_TABLE['-.-'];
      res.push(elem);
    }
    if (elem === '10111010') {
      elem = MORSE_TABLE['.-..'];
      res.push(elem);
    }
    if (elem === '1111') {
      elem = MORSE_TABLE['--'];
      res.push(elem);
    }
    if (elem === '1110') {
      elem = MORSE_TABLE['-.'];
      res.push(elem);
    }
    if (elem === '111111') {
      elem = MORSE_TABLE['---'];
      res.push(elem);
    }
    if (elem === '10111110') {
      elem = MORSE_TABLE['.--.'];
      res.push(elem);
    }
    if (elem === '11111011') {
      elem = MORSE_TABLE['--.-'];
      res.push(elem);
    }
    if (elem === '101110') {
      elem = MORSE_TABLE['.-.'];
      res.push(elem);
    }
    if (elem === '101010') {
      elem = MORSE_TABLE['...'];
      res.push(elem);
    }
    if (elem === '11') {
      elem = MORSE_TABLE['-'];
      res.push(elem);
    }
    if (elem === '101011') {
      elem = MORSE_TABLE['..-'];
      res.push(elem);
    }
    if (elem === '10101011') {
      elem = MORSE_TABLE['...-'];
      res.push(elem);
    }
    if (elem === '101111') {
      elem = MORSE_TABLE['.--'];
      res.push(elem);
    }
    if (elem === '11101011') {
      elem = MORSE_TABLE['-..-'];
      res.push(elem);
    }
    if (elem === '11101111') {
      elem = MORSE_TABLE['-.--'];
      res.push(elem);
    }
    if (elem === '11111010') {
      elem = MORSE_TABLE['--..'];
      res.push(elem);
    }
    if (elem === '1011111111') {
      elem = MORSE_TABLE['.----'];
      res.push(elem);
    }
    if (elem === '1010111111') {
      elem = MORSE_TABLE['..---'];
      res.push(elem);
    }
    if (elem === '1010101111') {
      elem = MORSE_TABLE['...--'];
      res.push(elem);
    }
    if (elem === '1010101111') {
      elem = MORSE_TABLE['...--'];
      res.push(elem);
    }
    if (elem === '1010101011') {
      elem = MORSE_TABLE['....-'];
      res.push(elem);
    }
    if (elem === '1010101010') {
      elem = MORSE_TABLE['.....'];
      res.push(elem);
    }
    if (elem === '1110101010') {
      elem = MORSE_TABLE['-....'];
      res.push(elem);
    }
    if (elem === '1111101010') {
      elem = MORSE_TABLE['--...'];
      res.push(elem);
    }
    if (elem === '1111111010') {
      elem = MORSE_TABLE['---..'];
      res.push(elem);
    }
    if (elem === '1111111110') {
      elem = MORSE_TABLE['----.'];
      res.push(elem);
    }
    if (elem === '1111111111') {
      elem = MORSE_TABLE['-----'];
      res.push(elem);
    }
    if (elem === 'NaN') {
      elem = ' ';
      res.push(elem);
    }
  }

  return res.join('');// write your solution here
}

module.exports = {
    decode
}