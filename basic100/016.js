// 공백을 두고 문자(character) 2개를 입력받아 순서를 바꿔 출력해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  let a = arr[0];
  let b = arr[1];
  console.log(a);
  console.log(b);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
