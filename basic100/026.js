// 실수 2개를 입력받아
// 합을 출력하는 프로그램을 작성해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let a = (b = 0);
rl.on("line", (line) => {
  count++;
  if (count === 1) {
    a = parseFloat(line);
  }
  if (count === 2) {
    b = parseFloat(line);
    console.log(a + b);
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
