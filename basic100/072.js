// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.

// while 조건식 :
//   ...
//   ...
// 반복 실행구조를 사용해 보자.

// 예시
// ...
// while n!=0 :
//   print(n)
//   n = n-1
// ...

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  for (let i = a; i > 0; i--) {
    console.log(i);
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
