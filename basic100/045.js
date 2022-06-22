// 정수 3개를 입력받아 합과 평균을 출력해보자.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = sum / arr.length;
  console.log(sum, avg.toFixed(2));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
