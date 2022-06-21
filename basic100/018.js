// 24시간 시:분 형식으로 시간이 입력될 때, 그대로 출력하는 연습을 해보자.

// 예시
// a, b = input().split(':')
// print(a, b, sep=':')
// 와 같은 방법으로 가능하다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let answer = "";
  let arr = line.split(":");
  answer = arr.join(":");
  console.log(answer);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
