// 행렬의 곱셈

function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
      let temp = [];
      for (let j = 0; j < arr2[0].length; j++) {
        let new_element = 0;
        for (let k = 0; k < arr2.length; k++) {
          new_element += (arr1[i][k] * arr2[k][j])
        }
        temp.push(new_element);
      }
      answer.push(temp);
    }

    return answer;
}

let arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
let arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];
console.log(solution(arr1, arr2));