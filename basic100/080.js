// 1부터 n까지, 1부터 m까지 숫자가 적힌 서로 다른 주사위 2개를 던졌을 때,
// 나올 수 있는 모든 경우를 출력해보자.

// 예시
// ...
// for i in range(1, n+1) :
//   for j in range(1, m+1) :
//     print(i, j)
// ...

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  let n = arr[0];
  let m = arr[1];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      console.log(i, j);
    }
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
