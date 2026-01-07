// 03. 두 개 뽑아서 더하기

function solution(numbers) {
    var answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    
    const uniqueAnswer = [...new Set(answer)];
    uniqueAnswer.sort((a, b) => (a - b))
    
    return uniqueAnswer;
}