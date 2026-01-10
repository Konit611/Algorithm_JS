// 실패율

function solution(N, stages) {
    fail_rate_values = [];

    for (let i = 1; i < N + 1; i++) {
        
        let challenger = 0;
        let looser = 0;

        stages.forEach((stage) => {
            if (stage >= i) {
                challenger++;
            }
            if (stage == i) {
                looser++;
            }
        });

        fail_rate_values.push([i, looser/challenger]);
    }

    fail_rate_values.sort((a, b) => {
        const keyA = a[0];
        const valueA = a[1];
        const keyB = b[0];
        const valueB = b[1];

        if (valueA < valueB) {
            return 1;
        } else if (valueA > valueB) {
            return -1;
        } else {
            if (keyA < keyB) {
                return -1
            } else if (keyA > keyB) {
                return 1
            } else {
                return 0
            }
        }
    });

    let answer = [];
    fail_rate_values.forEach((value) => {
        answer.push(value[0]);
    });

    return answer
}

const N = 4;
const stages = [4,4,4,4,4];
console.log(solution(N, stages));