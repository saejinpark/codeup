// 정수 2개(a, b)를 입력받아 합, 차, 곱, 몫, 나머지, 나눈 값을 자동으로 계산해보자.
// 단, b는 0이 아니다.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  let a = Number(arr[0]);
  let b = Number(arr[1]);
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);
  console.log((a / b).toFixed(2));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
