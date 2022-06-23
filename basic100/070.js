// 월이 입력될 때 계절 이름이 출력되도록 해보자.

// 월 : 계절 이름
// 12, 1, 2 : winter
//   3, 4, 5 : spring
//   6, 7, 8 : summer
//   9, 10, 11 : fall

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = Number(line);
  switch (a) {
    case 12:
    case 1:
    case 2:
      console.log("winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("summer");
      break;
    default:
      break;
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
