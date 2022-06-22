// 알파벳 문자와 숫자로 이루어진 단어 2개를 입력받아
// 순서대로 붙여 출력하는 프로그램을 작성해보자.
// 예시
// w1, w2 = input().split()
// s = w1 + w2
// print(s)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(arr[0] + arr[1]);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
