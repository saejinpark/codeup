// 정수(0 ~ 100) 1개를 입력받아 0부터 그 수까지 순서대로 출력해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  for (let i = 0; i <= a; i++) {
    console.log(i);
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
