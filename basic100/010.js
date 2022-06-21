// 정수(integer)는
// 양의 정수(1, 2, 3, 4, 5, ...), 음의 정수(-1, -2, -3, -4, -5, ...), 0 과 같이
// 소숫점 아래에 수가 없는 수라고 할 수 있다.

// 변수에 정수값을 저장한 후 정수로 변환하여 출력해보자.

// 예시
// n = input()
// n = int(n)
// print(n)
// 와 같은 형태로 가능하다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  //   console.log(Number(line));
  console.log(parseInt(line));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
