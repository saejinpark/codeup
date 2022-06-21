// 6자리의 연월일(YYMMDD)을 입력받아 나누어 출력해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(":");
  console.log(arr[1]);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
