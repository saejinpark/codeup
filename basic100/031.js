// 10진 정수 1개를 입력받아
// 유니코드 문자로 출력해보자.
// 예시
// c = int(input())
// print(chr(c))  #c에 저장되어 있는 정수 값을 유니코드 문자(chracter)로 바꿔 출력한다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(String.fromCharCode(Number(line)));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
