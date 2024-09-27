let student1 = {
  name : "홍길동",
  score : 90
}

let student2 = student1;
student2.age = 20;

let student3 = {...student1};

console.log(student1 == student2);    //true
console.log(student1 == student3);    //false

student3.school = "kosta";

console.log(student1);    //{ name: '홍길동', score: 90, age: 20 }
console.log(student2);    //{ name: '홍길동', score: 90, age: 20 }
console.log(student3);    //{ name: '홍길동', score: 90, age: 20, school: 'kosta' }