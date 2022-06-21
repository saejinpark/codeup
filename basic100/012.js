// 줄을 바꿔 정수(integer) 2개를 입력받아 줄을 바꿔 출력해보자.

// 예시
// a = input() 
// b = input()
// a=int(a)
// b=int(b)
// print(a)
// print(b)
// 과 같은 방법으로 가능하다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let a, b;

rl.on("line", (line) => {
  count++;
  if (a === undefined) a = line;
  else if (b === undefined) b = line;
  if (count === 2) {
    console.log(a);
    console.log(b);
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
