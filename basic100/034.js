// 정수 2개(a, b)를 입력받아 a에서 b를 뺀 차를 출력하는 프로그램을 작성해보자.

// 예시
// ...
// c = a - b
// print(c)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(Number(arr[0]) - Number(arr[1]));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
