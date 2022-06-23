// 1부터 입력한 정수까지 1씩 증가시켜 출력하는 프로그램을 작성하되,
// 3의 배수인 경우는 출력하지 않도록 만들어보자.

// 예를 들면,
// 1 2 4 5 7 8 10 11 13 14 ...
// 와 같이 출력하는 것이다.

// 예시
// ...
// for i in range(1, n+1) :
//   if i%2==0 :
//     continue            #다음 반복 단계로 넘어간다.
//   print(i, end=' ')    #i가 짝수가 아닐 때만 실행된다.
// ...
// 위 코드는 홀 수만 출력하는 예시이다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let limit = Number(line);
  let answer = "";
  for (let i = 1; i <= limit; i++) {
    if (i % 3 !== 0) {
      answer += i + " ";
    }
  }
  console.log(answer.trim());
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
