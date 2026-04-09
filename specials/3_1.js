function solution(priorities, location) {
    let answer = 0;
    
    // 1. 객체 배열로 변환 (인덱스와 우선순위를 한 번에 관리)
    // Array.from을 이렇게 쓰면 더 깔끔합니다.
    let queue = priorities.map((priority, index) => ({ priority, index }));
    while (queue.length > 0) {
        // 2. 맨 앞의 프로세스 꺼내기 (shift 사용)
        const current = queue.shift();
        
        // 3. some()을 사용하여 더 높은 우선순위가 있는지 확인 (즉시 종료)
        const hasHigher = queue.some(p => p.priority > current.priority);

        if (hasHigher) {
            // 더 높은 게 있으면 뒤로 보냄
            queue.push(current);
        } else {
            // 실행 가능하면 카운트 증가
            answer++;
            // 내가 찾던 인덱스라면 종료
            if (current.index === location) return answer;
        }
    }
}

const priorities = [2, 1, 3, 2];
const location = 2;

console.log(solution(priorities, location))