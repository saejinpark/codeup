// 2개의 정수값이 입력될 때,
// 그 불 값(True/False) 이 서로 같을 때에만 True 를 출력하는 프로그램을 작성해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  let a = arr[0];
  let b = arr[1];
  console.log(Boolean(a) === Boolean(b));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
