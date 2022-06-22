// 정수 2개(a, b) 를 입력받아 a를 b로 나눈 나머지를 출력해보자.

// 예시
// ...
// print(a%b)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(parseInt(Number(arr[0]) % Number(arr[1])));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
