// "연도.월.일"을 입력받아 "일-월-연도" 순서로 바꿔 출력해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let answer = line.split(".").reverse().join("-");
  console.log(answer);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
