// 정수가 입력되었을 때, True/False 로 평가해주는 프로그램을 작성해보자.

// 예시
// n = int(input())
// print(bool(n))

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  console.log(Boolean(a));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
