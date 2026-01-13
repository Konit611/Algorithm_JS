// 괄호 짝 맞추기.

function solution(s) {
  
  let stack = [];

  for (const gwalho of s) {
    if (gwalho == '(') {
      stack.push(gwalho);
    } else if (gwalho == ')'){
      if (stack.length == 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length == 0;
}

const s = "(())";
console.log(solution(s));