a();
setTimeout(function () {
  console.log("2 -- 비동기함수입니다.")
}, 3000);
c();

function a() {
  console.log("1 -- 동기 함수입니다.");
}

function c() {
  console.log("3 -- 동기 함수입니다.");
}

// 1 -- 동기 함수입니다.
// 3 -- 동기 함수입니다.
// (3초 뒤)
// 2 -- 비동기함수입니다.