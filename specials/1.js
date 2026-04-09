// Programmars Lv 1 성격유형 검사하기.

function solution(survey, choices) {
    var answer = [];

    const type_dict = {
        "RT" : 0,
        "TR" : 0,
        "FC" : 0, 
        "CF" : 0, 
        "MJ" : 0, 
        "JM" : 0, 
        "AN" : 0, 
        "NA" : 0
    }

    for (let i = 0; i < survey.length; i++) {
        const question = survey[i];
        const answer = choices[i];
        if (answer == 4) {
            continue;
        }

        if (question == "RT") {
            if (answer == 1) {
                type_dict["TR"] += 3;
            } else if (answer == 2) {
                type_dict["TR"] += 2;
            } else if (answer == 3) {
                type_dict["TR"] += 1;
            } else if (answer == 5) {
                type_dict["RT"] += 1;
            } else if (answer == 6) {
                type_dict["RT"] += 2;
            } else if (answer == 7) {
                type_dict["RT"] += 3;
            } 
            
        } else if (question == "TR") {
            if (answer == 1) {
                type_dict["RT"] += 3;
            } else if (answer == 2) {
                type_dict["RT"] += 2;
            } else if (answer == 3) {
                type_dict["RT"] += 1;
            } else if (answer == 5) {
                type_dict["TR"] += 1;
            } else if (answer == 6) {
                type_dict["TR"] += 2;
            } else if (answer == 7) {
                type_dict["TR"] += 3;
            } 
        } else if (question == "FC") {
            if (answer == 1) {
                type_dict["CF"] += 3;
            } else if (answer == 2) {
                type_dict["CF"] += 2;
            } else if (answer == 3) {
                type_dict["CF"] += 1;
            } else if (answer == 5) {
                type_dict["FC"] += 1;
            } else if (answer == 6) {
                type_dict["FC"] += 2;
            } else if (answer == 7) {
                type_dict["FC"] += 3;
            } 
        } else if (question == "CF") {
            if (answer == 1) {
                type_dict["FC"] += 3;
            } else if (answer == 2) {
                type_dict["FC"] += 2;
            } else if (answer == 3) {
                type_dict["FC"] += 1;
            } else if (answer == 5) {
                type_dict["CF"] += 1;
            } else if (answer == 6) {
                type_dict["CF"] += 2;
            } else if (answer == 7) {
                type_dict["CF"] += 3;
            } 
        } else if (question == "MJ") {
            if (answer == 1) {
                type_dict["JM"] += 3;
            } else if (answer == 2) {
                type_dict["JM"] += 2;
            } else if (answer == 3) {
                type_dict["JM"] += 1;
            } else if (answer == 5) {
                type_dict["MJ"] += 1;
            } else if (answer == 6) {
                type_dict["MJ"] += 2;
            } else if (answer == 7) {
                type_dict["MJ"] += 3;
            } 
        } else if (question == "JM") {
            if (answer == 1) {
                type_dict["MJ"] += 3;
            } else if (answer == 2) {
                type_dict["MJ"] += 2;
            } else if (answer == 3) {
                type_dict["MJ"] += 1;
            } else if (answer == 5) {
                type_dict["JM"] += 1;
            } else if (answer == 6) {
                type_dict["JM"] += 2;
            } else if (answer == 7) {
                type_dict["JM"] += 3;
            } 
        } else if (question == "AN") {
            if (answer == 1) {
                type_dict["NA"] += 3;
            } else if (answer == 2) {
                type_dict["NA"] += 2;
            } else if (answer == 3) {
                type_dict["NA"] += 1;
            } else if (answer == 5) {
                type_dict["AN"] += 1;
            } else if (answer == 6) {
                type_dict["AN"] += 2;
            } else if (answer == 7) {
                type_dict["AN"] += 3;
            } 
        } else if (question == "NA") {
            if (answer == 1) {
                type_dict["AN"] += 3;
            } else if (answer == 2) {
                type_dict["AN"] += 2;
            } else if (answer == 3) {
                type_dict["AN"] += 1;
            } else if (answer == 5) {
                type_dict["NA"] += 1;
            } else if (answer == 6) {
                type_dict["NA"] += 2;
            } else if (answer == 7) {
                type_dict["NA"] += 3;
            } 
        }
    }

    console.log(type_dict)

    if (type_dict["RT"] > type_dict["TR"]) {
        answer[0] = 'T';
    } else if (type_dict["RT"] <= type_dict["TR"]) {
        answer[0] = 'R';
    }

    if (type_dict["FC"] >= type_dict["CF"]) {
        answer[1] = 'C';
    } else if (type_dict["FC"] < type_dict["CF"]) {
        answer[1] = 'F';
    }

    if (type_dict["MJ"] >= type_dict["JM"]) {
        answer[2] = 'J';
    } else if (type_dict["MJ"] < type_dict["JM"]) {
        answer[2] = 'M';
    }

    if (type_dict["AN"] > type_dict["NA"]) {
        answer[3] = 'N';
    } else if (type_dict["AN"] <= type_dict["NA"]) {
        answer[3] = 'A';
    }

    return answer.join('');
}

survey = ["TR", "RT", "TR"];
choices = [7, 1, 3];

console.log(solution(survey, choices));