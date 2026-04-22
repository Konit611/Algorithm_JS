// 동영상 재생기
function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';

    let all_seconds = {};

    video_len_arr = video_len.split(":");
    pos_arr = pos.split(":");
    op_start_arr = op_start.split(":");
    op_end_arr = op_end.split(":");

    all_seconds['video_len'] = parseInt((video_len_arr[0] * 60)) + parseInt(video_len_arr[1]);
    all_seconds['pos'] = parseInt((pos_arr[0] * 60)) + parseInt(pos_arr[1]);
    all_seconds['op_start'] = parseInt((op_start_arr[0] * 60)) + parseInt(op_start_arr[1]);
    all_seconds['op_end'] = parseInt((op_end_arr[0] * 60)) + parseInt(op_end_arr[1]);

    for (command of commands) {
        if (all_seconds['pos'] <= all_seconds['op_end'] && all_seconds['pos'] >= all_seconds['op_start']) {
            all_seconds['pos'] = all_seconds['op_end'];
        }
        
        if (command == "next") {
            let next_sec = all_seconds['pos'] + 10;
            if (next_sec >= all_seconds['video_len']) {
                all_seconds['pos'] = all_seconds['video_len'];
            } else {
                all_seconds['pos'] = next_sec
            }
        } else {
            let next_sec = all_seconds['pos'] - 10;
            if (next_sec <= 0) {
                all_seconds['pos'] = 0;
            } else {
                all_seconds['pos'] = next_sec
            }
        }

        if (all_seconds['pos'] <= all_seconds['op_end'] && all_seconds['pos'] >= all_seconds['op_start']) {
            all_seconds['pos'] = all_seconds['op_end'];
        }
    }
    
    let mm = String(Math.floor(all_seconds['pos'] / 60));
    let ss = String(all_seconds['pos'] % 60);

    if (mm < 10) {
        mm = mm.padStart(2, "0");
    }

    if (ss < 10) {
        ss = ss.padStart(2, "0");
    }
    
    return mm + ":" + ss;
}

let video_len = "10:55";
let pos = "00:05";
let op_start = "00:15";
let op_end = "06:55";
let commands = ["prev", "next", "next"];

console.log(solution(video_len, pos, op_start, op_end, commands))