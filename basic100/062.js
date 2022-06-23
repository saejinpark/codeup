// 입력된 정수 두 개를 비트단위로 xor 연산한 후 그 결과를 정수로 출력해보자.
// 비트단위(bitwise) 연산자 ^(xor, circumflex/caret, 서컴플렉스/카릿)를 사용하면 된다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ");
  let a = Number(arr[0]);
  let b = Number(arr[1]);

  console.log(a ^ b);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
