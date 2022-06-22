// 단어와 반복 횟수를 입력받아 여러 번 출력해보자.
// 예시
// w, n = input().split()
// print(w*int(n))

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");

  console.log(arr[0].repeat(Number(arr[1])));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
