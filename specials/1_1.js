// 1의 클린 버전

function solution(survey, choices) {
    const scores = {};
    const types = ["RT", "CF", "JM", "AN"];

    survey.forEach((question, i) => {
        const [left, right] = question;
        const answer = choices[i] - 4;

        if (answer < 0) {
            scores[left] = (scores[left] || 0) + Math.abs(answer);
        } else if (answer > 0) {
            scores[right] = (scores[right] || 0) + answer;
        }
    })

    answer = types.map((type) => {
        const [a, b] = type;
        return (scores[a] || 0) >= (scores[b] || 0) ? a : b;
    }).join('');

    return answer;
}

survey = ["AN", "CF", "MJ", "RT", "NA"];
choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));