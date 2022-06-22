// 정수 2개(a, b)를 입력받아
// a를 b번 곱한 거듭제곱을 출력하는 프로그램을 작성해보자.

// 예시
// ...
// c = a**b
// print(c)
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
  answer = 1;
  for (let i = 0; i < Number(arr[1]); i++) {
    answer *= Number(arr[0]);
  }
  console.log(answer);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
