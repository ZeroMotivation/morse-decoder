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
    let buff = [];
    let res = "";
    for(let i = 0; i < expr.length; i += 10) {
     buff.push(expr.slice(i, i + 10));
    }
    let maped = buff.map((e) => e.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, ''));
    maped.forEach((e) => {
      if(e === "**********") res += ' ';
      for(let key in MORSE_TABLE) {
        if(e === key) res += MORSE_TABLE[key]
      }
    })
    return res;
  }

module.exports = {
    decode
}