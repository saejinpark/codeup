// 문자 1개를 입력받아 그 다음 문자를 출력해보자.
// 영문자 'A'의 다음 문자는 'B'이고, 숫자 '0'의 다음 문자는 '1'이다.

// 예시
// ...
// print(chr(n+1))

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(String.fromCharCode(Number(line) + 1));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
