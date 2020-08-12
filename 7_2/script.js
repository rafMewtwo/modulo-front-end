const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
//exe01
  const addTurn = (obj, key, value) => {
      obj[key] = value;
  }

 addTurn(lesson2, 'turno', 'manhã');
 console.log(lesson2);
 console.log(lesson2["turno"]);
 console.log(Object.keys(lesson2))
//exe 02
 const listKeys = obj => {
     console.log(`${Object.keys(obj)}`);
 }

 listKeys(lesson3);
//exe o3
 const tamObj = obj => { console.log(`${Object.keys(obj).length}`)}

 tamObj(lesson3);
 //exe 04
 const listVal = obj => {
    console.log(`${Object.values(obj)}`);
}

listVal(lesson3);
//exe 05
const allLessons = {}
Object.assign(allLessons, { lesson1 , lesson2, lesson3 });
// Object.assign(allLessons, {lesson3});
// Object.assign(allLessons, {lesson2});
console.log(allLessons);
//exe 06
const totalStudent = obj => {
    let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
}
totalStudent(allLessons);
console.log(totalStudent(allLessons));
//exe 07
const valueKey = (obj, num) => {
    const resultado = Object.values(obj);
    console.log(resultado[num]);
}
valueKey(lesson1, 1);

// const getValueByNumber = (obj,number) => Object.values(obj)[number];
// console.log(getValueByNumber);

//exe08
const verifyObj = (obj, key, value) => {
    const test1 = Object.keys(obj).includes(key)
    if(test1){
        if(obj[key]==value){
            console.log("existe");
        }else{
            console.log("nao existe");
        }
    }

    
}
verifyObj(lesson1, 'materia', 'dois');

//bonus01
//Objeto dentro de array
//obj[array[i]].materia
//obj = allLessons , array = lesson1 ... , array de i é p andar na 1 , 2 e 3
//.materia p/ acessar o valor da key
const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      if(obj[array[i]].materia === 'Matemática'){
      total += obj[array[i]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));

  //bonus02

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (i in array) {
    if (array[i].professor === name) {
      allLessons.push(array[i].materia)
      allStudent += array[i].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));