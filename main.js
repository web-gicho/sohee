const todoList = ["쇼핑하기", "청소하기", "설거지하기"];

// push, pop, shift, unshift, length, sort

todoList.push("카페가기");
console.log(todoList);

todoList.pop();
console.log(todoList);

todoList.shift();
console.log(todoList);

todoList.unshift("숙제하기", "과제하기");
console.log(todoList);

console.log(" for 반복문 ");
for (let i = 0; i < todoList.length; i++) {
  console.log(todoList[i]);
}

console.log(" for in 반복문 ");
for (let index in todoList) {
  console.log(todoList[index]);
}

console.log(" for of 반복문 ");
for (let item of todoList) {
  console.log(item);
}

console.log(" for each 반복문 ");
todoList.forEach((item, index) => {
  console.log(index);
});

// todoList.forEach();

// function () {}
// () => {}

// function (item, index) {
//   console.log(item, index);
// }
// (item, index) => {
//   console.log(item, index);
// }
