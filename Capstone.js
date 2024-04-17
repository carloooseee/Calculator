let result = document.getElementById("resulto1");

let paren = true;

function addParen() {
  if (paren) {
    result.value += '(';
    paren = false;
  } else {
    result.value += ')';
    paren = true;
  }
}
function addNumber(num) {
  result.value += num;
}
function clearResult() {
  result.value = "";
}
function calculate() {
  result.value = eval(result.value);
}