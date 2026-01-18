// 주식 가격

// 마지막에서 시간 초과. N^2
// function solution(prices) {
//     let answer = [];

//     for (let i = 0; i < prices.length; i++) {
//         let price_time = 0;
//         for (let j = i+1; j < prices.length; j++) {
//             price_time++;
//             if (prices[i] > prices[j]) {
//                 break;
//             }
//         }
//         answer.push(price_time);
//     }

//     return answer;
// }

function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);

    const stack = [0];
    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length -1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = n - 1 - j;
    }

    return answer;
}

let prices = [1, 2, 3, 2, 3];
console.log(solution(prices));