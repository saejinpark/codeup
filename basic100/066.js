// 3개의 정수(a, b, c)가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.

// 예시
// ...
// if a%2==0 :
//   print("even")
// else :
//   print("odd")
// ...

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));
  for (let oneOfArr of arr) {
    if (oneOfArr % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
