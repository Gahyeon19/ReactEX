// a();
// setTimeout(function () {
//   console.log("2 -- 비동기함수입니다.")
// }, 3000);
// c();

// function a() {
//   console.log("1 -- 동기 함수입니다.");
// }

// function c() {
//   console.log("3 -- 동기 함수입니다.");
// }

// // 1 -- 동기 함수입니다.
// // 3 -- 동기 함수입니다.
// // (3초 뒤)
// // 2 -- 비동기함수입니다.

//////////////////////////////////////////////////////////////////////////
//동기
// import { readFileSync } from 'node:fs';

// console.log(1);
// const data = readFileSync('sample.txt');

// console.log(2 + " ===> " + data);
// console.log(3);

//////////////////////////////////////////////////////////////////////////
//비동기
import { readFileSync, readFile } from 'node:fs';

console.log(1);
readFile('sample.tt', (err, data) => {
  if (err) console.log("error");
  console.log(2 + " ===> " + data);
});
console.log(3);