// 짝지어 제거하기

function solution(s) {
    let answer = 0;

    let str_stack = [];
    for (let string of s) {
        if (str_stack.length == 0) {
            str_stack.push(string);
            continue;
        }

        if (str_stack.at(-1) == string) {
            str_stack.pop()
        } else {
            str_stack.push(string);
        }
    }

    if (str_stack.length == 0) {
        answer = 1;
    }

    return answer
}

let s = 'cdcd';
console.log(solution(s));