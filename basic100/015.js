// 공백을 두고 입력된정수(integer) 2개를 입력받아 줄을 바꿔 출력해보자.

// 예시
// a, b = input().split()
// a=int(a)
// b=int(b)
// print(a)
// print(b)
// 과 같은 방법으로 두 정수를 입력받아 출력할 수 있다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  let a = arr[0];
  let b = arr[1];
  console.log(a);
  console.log(b);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
