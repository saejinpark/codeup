// 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.

// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.

// 예시
// ...
// if n>=90 :
//   print('A')
// else :
//   if n>=70 :
//     print('B')
//   else :
//     if n>=40 :
//       print('C')
//     else :
//       print('D')
// ...

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  if (a >= 90) {
    console.log("A");
  } else if (a >= 70) {
    console.log("B");
  } else if (a >= 40) {
    console.log("C");
  } else {
    console.log("D");
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
