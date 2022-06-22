// 정수 1개를 입력받아 2배 곱해 출력해보자.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  console.log(a << 1);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
