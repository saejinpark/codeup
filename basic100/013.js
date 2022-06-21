// 줄을 바꿔 문자(character) 2개를 입력받고, 순서를 바꿔 한 줄씩 출력해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let a, b;

rl.on("line", (line) => {
  count++;
  if (a === undefined) a = line;
  else if (b === undefined) b = line;
  if (count === 2) {
    console.log(b);
    console.log(a);
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
