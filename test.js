function someFunc(price) {
    const result =  {}

    const bills = ["10000", "5000", "1000", "500", "100", "50", "10", "5", "1"];

    let currentPrice = Math.abs(price);
    for (bill of bills) {
        const answer = Math.floor(currentPrice / parseInt(bill));
        result[bill] = answer;
        currentPrice -= (answer * parseInt(bill));
    }

    return JSON.stringify(result);
}

const price = 99999;
console.log(someFunc(price));