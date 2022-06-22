// 실수 2개(f1, f2)를 입력받아
// f1 을 f2 로 나눈 값을 출력해보자. 이 때 소숫점 넷째자리에서 반올림하여 무조건 소숫점 셋째 자리까지 출력한다.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  let a = Number(arr[0]);
  let b = Number(arr[1]);
  console.log((a / b).toFixed(2));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
