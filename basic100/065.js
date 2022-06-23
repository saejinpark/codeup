// 입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
// 단, 3항 연산을 사용한다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  for (let oneOfArr of arr) {
    if (oneOfArr%2 === 0 ) {
      console.log(oneOfArr);
    }
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
