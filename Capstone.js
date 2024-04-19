let result = document.getElementById("resulto1");

let parenthesisIncluded = true;
function addParen() {
  if (parenthesisIncluded) {
    result.value += '(';
    parenthesisIncluded  = false;
  } else {
    result.value += ')';
    parenthesisIncluded  = true;
  }
}
function addNumber(num) {
  result.value += num;
}
function clearResult() {
  parenthesisIncluded = true;
  result.value = "";
}
function calculate() {
  result.value = eval(result.value);
}
function backspace() {
  let inputField = document.getElementById("resulto1");
  let currentValue = inputField.value;
  inputField.value = currentValue.slice(0, -1);
}
