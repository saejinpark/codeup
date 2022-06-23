// 영문 소문자(a ~ z) 1개가 입력되었을 때,
// a부터 그 문자까지의 알파벳을 순서대로 출력해보자.

// 예시
// c = ord(input())
// t = ord('a')
// while t<=c :
//   print(chr(t), end=' ')
//   t += 1

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let a = "a".charCodeAt();
  let b = line.charCodeAt();
  for(let i=a; i<=b; i++){
    console.log(String.fromCharCode(i));
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
