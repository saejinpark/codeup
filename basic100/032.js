// ...
// print(-n)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let a = 0;
  a -= Number(line);
  console.log(a);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
