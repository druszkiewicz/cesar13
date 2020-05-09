let alfabet = [];
let alfLen = 0;
let i;
// wielkie litery
for (i = 65; i <= 90; i++) {
  alfabet.push(String.fromCharCode(i));
}
// małe litery
for (i = 97; i <= 122; i++) {
  alfabet.push(String.fromCharCode(i));
}
//cyfry
for (i = 48; i <= 57; i++) {
    alfabet.push(String.fromCharCode(i));
  }
alfLen = alfabet.length;
//console.log(alfabet);

function newChar(char, codeLen) {
  let pos = alfabet.indexOf(char);
  let newPos;
  !isNaN(char) ? newPos = pos : newPos = pos + codeLen;
  if (newPos > alfLen) {
    newPos = newPos - alfLen;
  }
  return alfabet[newPos];
}

function cesar13(input){
  let result = '';
  for (i = 0; i < input.length; i++) {
    result = result + newChar(input[i], 13);
  }
  return result.toUpperCase();
}

//console.log(encrypt('PRZEPROGRAMOWANI'));

export {cesar13};