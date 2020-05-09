import {cesar13} from "./cesar";

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(cesar13('1PRZEPROGRAMOWANI'), '1CEMRCEBTENZBJNAV');