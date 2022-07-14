// 정보 선생님은 오늘도 이상한 출석을 부른다.

// 영일이는 오늘도 다른 생각을 해보았다.
// 출석 번호를 다 부르지는 않은 것 같은데... 가장 빠른 번호가 뭐였지?

// 출석 번호를 n번 무작위로 불렀을 때, 가장 빠른 번호를 출력해 보자.

// 단,
// 첫 번째 번호와 마지막 번호가 몇 번인지는 아무도 모른다.
// 음수(-) 번호, 0번 번호도 있을 수 있다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let n;

rl.on("line", (line) => {
  count++;
  if (count === 1) {
    n = Number(line);
  } else if (count === 2) {
    let a = line.split(" ");
    console.log(Math.min(...a));
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});