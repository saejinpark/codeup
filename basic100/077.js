// 정수(1 ~ 100) 1개를 입력받아 1부터 그 수까지 짝수의 합을 구해보자.

// 예시
// #다음 코드는 홀 수만 더해 출력한다.
// n = int(input())
// s = 0
// for i in range(1, n+1) :
//   if i%2==1 :
//     s += i

// print(s)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  let sumEven = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 2 == 0) sumEven += i;
  }
  console.log(sumEven);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
