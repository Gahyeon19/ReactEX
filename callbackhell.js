setTimeout(
  (todo) => {
    console.log(todo);
    setTimeout(
      (todo) => {
        console.log(todo);
        setTimeout(
          (todo) => {
            console.log(todo);
          },
          3000, "빨래하기");
      },
      1000, "청소하기");
  },
  2000, "운동하기"
);
//2초 뒤 "운동하기", 1초 뒤 "청소하기", 3초 뒤 "빨래하기" 출력
