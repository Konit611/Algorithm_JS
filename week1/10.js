// 괄호 회전하기

function check_kakko(target_string) {
  let opening_kakkos = ['[', '{', '('];

  let kakko_stack = [];
  for (const my_string of target_string) {
    if (opening_kakkos.includes(my_string)) {
      kakko_stack.push(my_string);
    } else if (my_string == ']' && kakko_stack.at(-1) == '[') {
      kakko_stack.pop();
    } else if (my_string == '}' && kakko_stack.at(-1) == '{') {
      kakko_stack.pop();
    } else if (my_string == ')' && kakko_stack.at(-1) == '(') {
      kakko_stack.pop();
    } else {
      return false;
    }
  }

  return kakko_stack.length == 0;
}

function solution(s) {
  var answer = 0;

  let target_string = s;

  for (let i = 0; i < s.length; i++) {
    if (check_kakko(target_string)) {
      answer++;
    }
    target_string = target_string.slice(1) + target_string[0];
  }

  return answer;
}

const s = "}}}";
console.log(solution(s));