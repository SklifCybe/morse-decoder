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

const getArray = (expr) => {
  return expr
    .split('')
    .map((el, id) => {
      if (id % 10 === 0) {
        return `., ${el}`;
      }
      return el;
    })
    .join('')
    .split('., ')
    .filter((el) => el !== '');
};

const deleteZeroes = (arr) => arr.map((el) => el.slice(el.indexOf('1')));

const getArrNum = (arr) => {
  return arr
    .map((el) => {
      return el
        .split('')
        .map((i, id) => {
          if (id % 2 === 0) {
            return `, ${i}`;
          }
          return i;
        })
        .join('');
    })
    .map((el) => {
      return el.split(',');
    })
    .map((el) => {
      return el.filter((i) => i !== '').map((i) => Number(i));
    });
};

const transformToMorz = (arr) => {
  return arr.map((el) => {
    return el.map((i) => {
      if (isNaN(i)) return 'space';
      return i === 10 ? '.' : '-';
    });
  });
};

const decode = (expr) => {
  const arr = transformToMorz(getArrNum(deleteZeroes(getArray(expr)))).map((el) => el.join(''));

  const resultArr = arr.map((el) => {
    return el === 'space' ? ' ' : MORSE_TABLE[el];
  })

  return resultArr.join('');
};

module.exports = {
  decode,
};
