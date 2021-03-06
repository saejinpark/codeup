// 기숙사 생활을 하는 학교에서 어떤 금요일(전원 귀가일)에는 모두 집으로 귀가를 한다.

// 오랜만에 집에 간 영일이는 아버지와 함께 두던 매우 큰 오목에 대해서 생각해 보다가
// "바둑판에 돌을 올린 것을 프로그래밍 할 수 있을까?"하고 생각하였다.

// 바둑판(19 * 19)에 n개의 흰 돌을 놓는다고 할 때,
// n개의 흰 돌이 놓인 위치를 출력하는 프로그램을 작성해보자.

// 예시
// d=[]                        #대괄호 [ ] 를 이용해 아무것도 없는 빈 리스트 만들기
// for i in range(20) :
//   d.append([])         #리스트 안에 다른 리스트 추가해 넣기
//   for j in range(20) :
//     d[i].append(0)    #리스트 안에 들어있는 리스트 안에 0 추가해 넣기

// n = int(input())
// for i in range(n) :
//   x, y = input().split()
//   d[int(x)][int(y)] = 1

// for i in range(1, 20) :
//   for j in range(1, 20) :
//     print(d[i][j], end=' ')    #공백을 두고 한 줄로 출력
//   print()                          #줄 바꿈

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let board = [];
for (let i = 0; i < 19; i++) {
  let row = [];
  for (let j = 0; j < 19; j++) {
    row.push(0);
  }
  board.push(row);
}

let first = true;
let limit;
let n = [];
rl.on("line", (line) => {
  if (first) {
    first = false;
    limit = Number(line);
  } else {
    limit--;
    n.push(line.split(" ").map((v) => Number(v) - 1));
    if (limit === 0) {
      for (let x of n) {
        board[x[0]][x[1]] = 1;
      }
      for (let i = 0; i < 19; i++) {
        console.log(board[i].join(" "));
      }
      rl.close();
    }
  }
});

rl.on("close", () => {
  process.exit();
});
