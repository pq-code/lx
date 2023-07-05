
export var maxProfit = function (prices) {
    let min = 99999
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
        }
        if (prices[i] - min > profit) {
            profit = prices[i] - min
        }
    }

    return profit
};
