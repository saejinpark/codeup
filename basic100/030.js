// 16진수를 입력받아 8진수(octal)로 출력해보자.

// 예시
// a = input()
// n = int(a, 16)      #입력된 a를 16진수로 인식해 변수 n에 저장
// print('%o' % n)  #n에 저장되어있는 값을 8진수(octal) 형태 문자열로 출력

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(line.charCodeAt());
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
