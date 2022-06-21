// 숫자(0~9)와 소수점(.)을 사용해 표현한 수를 실수(real number)라고 한다.

// 변수에 실수값을 저장한 후
// 변수에 저장되어 있는 값을 그대로 출력해보자.

// 예시
// f = input()
// f = float(f)
// print(f)
// 와 같은 형태로 가능하다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  //   console.log(Number(line));
  console.log(parseFloat(line));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
