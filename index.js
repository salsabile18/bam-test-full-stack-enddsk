// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI !
//SALSABILE MASSABIH

function isRangedNumber(num) {
  const digits = num.toString().split('').map(Number);
  return digits.every(
    (digit, index, array) => index === 0 || digit >= array[index - 1]
  );
}

function solutionExercice1(N) {
  //TAPE LE CODE DE L'EXERCICE 1 ICI!
  let res = 0;

  for (let i = 1; i <= N; i++) {
    if (isRangedNumber(i)) {
      res = i;
    }
  }

  return res;
}

function solutionExercice2(L) {
  //TAPE LE CODE DE L'EXERCICE 2 ICI!
  const filteredList = L.filter((item) => item > 0);

  if (filteredList.length === 0) {
    return 1;
  }
  filteredList.sort((a, b) => a - b);
  let res = 1;

  for (const num of filteredList) {
    if (num === res) {
      res++;
    } else {
      return res;
    }
  }

  return res;
}

function solutionExercice3(L) {
  //TAPE LE CODE DE L'EXERCICE 3 ICI!
  let res = 0;

  for (const num of L) {
    res ^= num;
  }

  return res;
}

helper.displayOnHtml(solutionExercice1(1000), '1');
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), '2');
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), '3');
