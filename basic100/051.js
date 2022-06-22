// 두 정수(a, b)를 입력받아
// a의 값이 b의 값과 서로 다르면 True 를, 같으면 False 를 출력하는 프로그램을 작성해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  let a = arr[0];
  let b = arr[1];
  console.log(a != b);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
