// 방문 길이

function solution(dirs) {
    const arr = [...new Array(11)].map(() => new Array(11).fill(0));
    const dir_dict = {
        'U': [-1, 0],
        'D': [1, 0],
        'R': [0, 1],
        'L': [0, -1],
    }

    let present_point = [5, 5];
    for (const dir of dirs) {
        const new_row = present_point[0] + dir_dict[dir][0];
        const new_col = present_point[1] + dir_dict[dir][1];

        if (new_row >=  0 && new_row <= 10 && new_col >= 0 && new_row <= 10) {
            if (arr[new_row][new_col] === 0) {
                arr[new_row][new_col] = 1;
            }
            present_point = [new_row, new_col];
        }
    }

    let answer = 0;
    arr.forEach(innerArray => {
        innerArray.forEach(num => {
            answer += num;
        });
    });
    arr.forEach(row => {
        console.log(JSON.stringify(row));
    });
    return answer;
}

let dirs = "ULURRDLLU"
console.log(solution(dirs));