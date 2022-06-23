// 입력된 두 정수(a, b) 중 큰 값을 출력하는 프로그램을 작성해보자.
// 단, 3항 연산을 사용한다.

// 예시
// a, b = input().split()
// a = int(a)  #변수 a에 저장되어있는 값을 정수로 바꾸어 다시 변수 a에 저장
// b = int(b)
// c = (a if (a>=b) else b)
// print(int(c))

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v));

  console.log(Math.max(...arr));
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
