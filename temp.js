const records1 = [
  ["Martha", "exit"],
  ["Paul", "enter"],
  ["Martha", "enter"],
  ["Steve", "enter"],
  ["Martha", "exit"],
  ["Jennifer", "enter"],
  ["Paul", "enter"],
  ["Curtis", "exit"],
  ["Curtis", "enter"],
  ["Paul", "exit"],
  ["Martha", "enter"],
  ["Martha", "exit"],
  ["Jennifer", "exit"],
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Martha", "exit"],
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"]
];
var records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"]
];
var exitHistory = {};
var enterHistory = {};
var exit = {};
var enter = {};
debugger;
records1.forEach(m => {
  let name = m[0];
  let status = m[1];
  if (status == "enter") {
    if (enterHistory[name]) {
      enter[name] = 1;
    }
    enterHistory[name] = 1;
  }
  else if (status == "exit") {
    exitHistory[name] = 1;
    if (enterHistory[name]) {
      delete enterHistory[name];
      delete exitHistory[name];
    }
    else {
      delete exitHistory[name];
      exit[name] = 1;
    }
  }
});
Object.keys(enterHistory).forEach(m => {
  enter[m] = 1;
});
console.log('entry', Object.keys(exit));
console.log('exit', Object.keys(enter));
// var exit = ["Paul", "Steve", "Curtis"];//
// var enter = ["Martha", "Curtis", "Paul"];
