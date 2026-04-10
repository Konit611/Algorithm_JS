// 기능 개발

function solution(progresses, speeds) {
    const answer = [];

    let pointer = 0;
    while (progresses.length > pointer) {
        speeds.forEach((speedForEachProcess, i) => {
            if (progresses[i] <= 100) {
                progresses[i] += speedForEachProcess;
            }
        });

        let proceed_count = 0;
        while (progresses[pointer] >= 100) {
            proceed_count++;
            pointer++;
        }

        if (proceed_count > 0) {
            answer.push(proceed_count);
        }
    }    

    return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
