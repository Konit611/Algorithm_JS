// 표 편집 - failed

function solution(n, k, cmd) {
    let table = new Array(n).fill("O");
  
    let delete_stack = [];
    for (let c of cmd) {
      let command = c.split(' ');
      if (command.length > 1) {
        if (command[0] == 'D') {
          let max_k = k + parseInt(command[1]);
          const deleted_count = delete_stack.filter(num => num >= k && num <= max_k).length;
          k = max_k + deleted_count;
        } else {
          let min_k = k - parseInt(command[1]);
          const deleted_count = delete_stack.filter(num => num >= min_k && num <= k).length;
          k = min_k - deleted_count;
        }
      } else if (command[0] == 'C') {
        delete_stack.push(k);
        table[k] = 'X';
        if (k == n - 1) {
          k--;
        } else {
          k++;
        }
      } else if (command[0] == 'Z') {
        const repair_element = delete_stack.pop();
        if (parseInt(repair_element) > k) {
          k++;
        } else {
          k--;
        }
        
        table[repair_element] = 'O';
      }
    }

    return table.join('');
}

let n = 8;
let k = 2;
let cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"];


console.log(solution(n, k, cmd));