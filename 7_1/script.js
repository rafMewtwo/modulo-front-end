//exe01
const checkScope = () => {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

console.log(checkScope());

//exe02
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
  // Only change code above this line
}
editInPlace();

//parte II
//ex01
const factorial = number => {
  let result = 1

  for (let i = 2; i <= number; i += 1) {
      result *= i
  }

  return result
}

//ex02
const longest = string => {
  const n = string.split(" ")
  let result = n[0].length;
  let maiorPalavra = n[0];
  for(let i=0;i<n.length;i++){
    if (n[i].length > result) {
      maiorPalavra = n[i];
      result = n[i].length;
    }
  }
  return maiorPalavra;
}
console.log(longest("Antônio foi no banheiro e não sabemos o que aconteceu"));

//ex03
const button = document.getElementById("button");
let conta = 0;
button.addEventListener('click', () => {
  let result = document.getElementById('result')
  conta++;
  result.innerHTML = conta;
})

//ex04
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))