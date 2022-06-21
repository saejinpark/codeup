// 6자리의 연월일(YYMMDD)을 입력받아 나누어 출력해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(line.substring(0, 2), line.substring(2, 4), line.substring(4, 6));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
