// 빨강(red), 초록(green), 파랑(blue) 빛을 섞어 여러 가지 다른 색 빛을 만들어 내려고 한다.

// 빨강(r), 초록(g), 파랑(b) 각 빛의 가짓수가 주어질 때,
// 주어진 rgb 빛들을 섞어 만들 수 있는 모든 경우의 조합(r g b)과 만들 수 있는 색의 가짓 수를 계산해보자.

// **모니터, 스마트폰과 같은 디스플레이에서 각 픽셀의 색을 만들어내기 위해서 r, g, b 색을 조합할 수 있다.
// **픽셀(pixel)은 그림(picture)을 구성하는 셀(cell)에서 이름이 만들어졌다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let arr = line.split(" ").map((v) => Number(v) - 1);
  let arrLen = arr.length;
  let temp = Array.from({ length: arrLen }, () => 0);
  let count = 0;
  while (true) {
    count++;
    console.log(temp.join(" "));
    temp[arrLen - 1]++;
    for (let i = arrLen - 1; i > 0; i--) {
      if (temp[i] > arr[i]) {
        temp[i] = 0;
        temp[i - 1]++;
      } else {
        break;
      }
    }
    if (temp[0] > arr[0]) {
      break;
    }
  }
  console.log(count);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
