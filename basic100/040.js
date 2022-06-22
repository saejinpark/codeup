// 실수 2개(f1, f2)를 입력받아
// f1을 f2번 거듭제곱한 값을 출력하는 프로그램을 작성해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(parseInt(Number(arr[0]) / Number(arr[1])));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
