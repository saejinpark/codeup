// 영문 소문자 'q'가 입력될 때까지
// 입력한 문자를 계속 출력하는 프로그램을 작성해보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (line === "q") {
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
