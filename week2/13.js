// 크레인 인형 뽑기

function solution(board, moves) {
    let answer = 0;

    let board_size = board.length;

    let bucket = [];
    for (let move of moves) {
        for (let i = 0; i < board_size; i++) {
            if (board[i][move-1]) {
                console.log([i, move-1]);
                if (bucket.at(-1) == board[i][move-1]) {
                    bucket.pop();
                    answer += 2;
                } else {
                    bucket.push(board[i][move-1]);
                }
                board[i][move-1] = 0;
                break;
            }
            
        }
    }

    return answer;
}

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
let moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));