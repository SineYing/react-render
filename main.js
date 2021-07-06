const React = window.React;
const ReactDOM = window.ReactDOM;
const c = React.createElement;

let listItems = [],
  key = 0;

let desItem = c("input", { id: "des", className: "des" });
let buttonItem = c("button", { onClick: add }, "提交");
let buttonClear = c("button", { onClick: clear }, "重置");
let buttonBox = c("div", { className: "buttonBox" }, buttonItem, buttonClear);
let submitBox = c("div", { className: "submitBox" }, desItem, buttonBox);

// 获取列表
function getListBox() {
  return c("ul", { className: "listBox" }, ...listItems);
}
// 新增
function add() {
  const inputItem = document.getElementById("des");
  const value = inputItem.value;
  if (value) {
    listItems.push(c("li", { className: "listItem", key: key++ }, value));
  }
  inputItem.value = "";
  render();
}
// 重置
function clear() {
  listItems = [];
  render();
}
// render
function render() {
  const arr = [submitBox, getListBox()];
  ReactDOM.render(
    c("div", { className: "box" }, ...arr),
    document.getElementById("app")
  );
}
// 初始化执行
render();
