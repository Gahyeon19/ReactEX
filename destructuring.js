// Destructuring (구조 분해 할당)
let student = {
  name : "고길동",      //"name" : "고길동"
  score : 95,           //"score" : 95
  age : 20              //"age" : 20
}

// let name = student.name;
// let score = student.score;

let {name, score, age} = student;   //{age, name, score} 도 가능(순서 상관 없음)
console.log('age' in student);      //true
console.log(student.school);        //undefined

console.log(`${name}의 점수는 ${score}점 입니다.`)
console.log(`${name}은 ${age}살 입니다.`)
