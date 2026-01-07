// 모의고사

function solution(answer) {
    const result = [];

    const m1 = [1, 2, 3, 4, 5];
    const m2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const m3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const temp = [0, 0, 0]; 

    for (let i = 0; i < answer.length; i++) {

        let m1Index = i % m1.length;
        let m2Index = i % m2.length;
        let m3Index = i % m3.length;

        if (answer[i] == m1[m1Index]) {
            temp[0] = temp[0] + 1
        }

        if (answer[i] == m2[m2Index]) {
            temp[1] = temp[1] + 1
        }

        if (answer[i] == m3[m3Index]) {
            temp[2] = temp[2] + 1
        }
    }

    const tempMax = Math.max(...temp);

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == tempMax) {
            result.push(i + 1);
        }
    }

    return result;
}

console.log(solution([1, 3, 2, 4, 2]));