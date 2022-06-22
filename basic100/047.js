// 정수 2개(a, b)를 입력받아 a를 2b배 곱한 값으로 출력해보자.
// 0 <= a <= 10, 0 <= b <= 10

// 예시
// a = 2
// b = 10
// print(a << b)  #210 = 1024 가 출력된다.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  let a = arr[0];
  let b = arr[1];
  console.log(a << b);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
