// 프로세스

function solution(priorities, location) {
    var answer = 0;
    const idx_queue = Array.from({ length: priorities.length }, (_, i) => i);

    // All Queue.
    while (priorities.length > 0) {
        const now_priority = priorities.shift();
        const now_idx = idx_queue.shift();

        // Is this element could be processed ?
        let is_this_possible_to_process = true
        
        priorities.forEach((priority) => {
            if (priority > now_priority) {
                is_this_possible_to_process = false;
            }
        })

        if (is_this_possible_to_process) {
            answer++;
            if (now_idx == location) break ;
        } else {
            priorities.push(now_priority);
            idx_queue.push(now_idx);
        }
    }

    return answer;
}

const priorities = [2, 1, 3, 2];
const location = 2;

console.log(solution(priorities, location))
