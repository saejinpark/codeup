// 단어와 반복 횟수를 입력받아 여러 번 출력해보자.
// 예시
// w, n = input().split()
// print(w*int(n))

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let a, b;

rl.on("line", (line) => {
  count++;
  if (count === 1) {
    a = Number(line);
  }
  if (count === 2) {
    b = line;
    console.log(b.repeat(a));
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
