// 정수 2개를 입력받아
// 합을 출력하는 프로그램을 작성해보자.

// 예시
// a, b = input().split()
// c = int(a) + int(b)
// print(c)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
