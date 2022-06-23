// 평가를 문자(A, B, C, D, ...)로 입력받아 내용을 다르게 출력해보자.

// 평가 내용
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  for (let oneOfArr of arr) {
    switch (oneOfArr) {
      case "A":
        console.log("best!!!");
        break;
      case "B":
        console.log("good!!");
        break;
      case "C":
        console.log("run!");
        break;
      case "D":
        console.log("slowly~");
        break;
      default:
        console.log("what?");
    }
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
