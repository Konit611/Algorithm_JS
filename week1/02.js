// 배열 제어하기

function solution(arr) {
    const uniqueArr = [...new Set(arr)]; 
    uniqueArr.sort((a, b) => (b - a));
    return uniqueArr;
}

