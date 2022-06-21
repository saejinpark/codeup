// 실수(real number) 1개를 입력받아 줄을 바꿔 3번 출력해보자.

// 예시
// ...
// print(f)  #f에 저장되어있는 값을 출력하고 줄을 바꾼다.
// print(f)
// print(f)
// 와 같은 방법으로 3번 줄을 바꿔 출력할 수 있다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(line);
  console.log(line);
  console.log(line);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
