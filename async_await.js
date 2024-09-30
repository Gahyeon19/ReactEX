// async function f1() {
//   return 1;
// }
// f1().then((value) => console.log(value));

// function f2() {
//   return 2;
// }
// let value = f2();
// console.log(value);

//2
//1
//f2는 동기, f1은 비동기(async)

///////////////////////////////////////////////////////////////////////

async function f3() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!!!"), 1000);
  })

  let result = await promise;
  console.log(result);
  
}
f3();
//내부는 동기함수처럼 적었지만 비동기함수로 쓸 수 있음
//1초 뒤 "완료!!!" 출력