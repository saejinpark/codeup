// 부모님과 함께 놀러간 영일이는
// 설탕과자(설탕을 녹여 물고기 등의 모양을 만든 것) 뽑기를 보게 되었다.

// 길이가 다른 몇 개의 막대를 바둑판과 같은 격자판에 놓는데,

// 막대에 있는 설탕과자 이름 아래에 있는 번호를 뽑으면 설탕과자를 가져가는 게임이었다.
// (잉어, 붕어, 용 등 여러 가지가 적혀있다.)

// 격자판의 세로(h), 가로(w), 막대의 개수(n), 각 막대의 길이(l),
// 막대를 놓는 방향(d:가로는 0, 세로는 1)과
// 막대를 놓는 막대의 가장 왼쪽 또는 위쪽의 위치(x, y)가 주어질 때,

// 격자판을 채운 막대의 모양을 출력하는 프로그램을 만들어보자.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

let n;
let m;

let board = [];

let limit;

let stickArr = [];

rl.on("line", (line) => {
  if (count === 0) {
    let arr = line.split(" ").map((v) => Number(v));
    n = arr[0];
    m = arr[1];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(0);
      }
      board.push(row);
    }
    count++;
  } else if (count === 1) {
    limit = Number(line);
    count++;
  } else {
    limit--;
    let stick = line.split(" ").map((v) => Number(v));
    stickArr.push(stick);
    if (limit === 0) {
      for (let oneOfStickArr of stickArr) {
        let [h, d, x, y] = oneOfStickArr;
        x = x - 1;
        y = y - 1;
        while (h > 0) {
          h--;
          board[x][y] = 1;
          if (d === 0) {
            y++;
          } else {
            x++;
          }
        }
      }
      for (let oneOfBoard of board) {
        console.log(oneOfBoard.join(" "));
      }
      rl.close();
    }
  }
});

rl.on("close", () => {
  process.exit();
});
