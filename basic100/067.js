// 0이 아닌 정수 1개가 입력되었을 때, 음(-)/양(+)과 짝(even)/홀(odd)을 구분해 분류해보자.
// 음수이면서 짝수이면, A
// 음수이면서 홀수이면, B
// 양수이면서 짝수이면, C
// 양수이면서 홀수이면, D
// 를 출력한다.

// 예시
// ...
// if n<0 :
//   if n%2==0 :
//     print('A')      #주의 : 변수 A와 문자열 'A' / "A" 는 의미가 완전히 다르다.
//   else :
//     print('B')
// else :
//   if n%2==0 :
//     print('C')
//   else :
//     print('D')
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
      if (oneOfArr < 0) {
        console.log("A");
      } else {
        console.log("C");
      }
    } else {
      if (oneOfArr < 0) {
        console.log("B");
      } else {
        console.log("D");
      }
    }
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
