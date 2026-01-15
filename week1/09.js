// 10진수를 2진수로 변환하기

function solution(decimal) {
  
  let answer = [];
  let target_number = decimal;

  while (target_number > 0) {
    const remainder = target_number % 2;
    if (remainder === 1) {
      answer.push(1);
    } else {
      answer.push(0);
    }
    target_number = Math.floor(target_number / 2);
  }

  return answer.reverse().join('');
}

let decimal = 12345;
console.log(solution(decimal));