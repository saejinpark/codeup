// print('%X' % n)  #n에 저장되어있는 값을 16진수 대문자 형태 문자열로 출력

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let a = "0x" + line;
  let n = parseInt(a, 8);
  console.log(n);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
