// Given an array prices[] of length n, representing the prices of the stocks on different days. 
// The task is to find the maximum profit possible by buying and selling the stocks on different 
// days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it 
// is not possible to make a profit then return 0.
// Note: Stock must be bought before being sold.
// Examples:
// Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
// Output: 8
// Explanation: You can buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, 
// the profit is 8.

//brute force approach - tc is O(n*n)
function maximumProfit(prices){
    let profit = 0;
    //iterate over the array
    //find all posible ways to buy and sell stocks
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            profit = Math.max(profit, prices[j]-prices[i]);
        }
    }
    return profit;
}
console.log(maximumProfit([7, 10, 1, 3, 6, 9, 2]))

//optimal approach - tc is O(n)
function maximumProfitOptimal(prices){
    //suppose we can buy at first index only
    let minSoFar = prices[0], profit = 0;
    //iterate over the array
    for(let i=1;i<prices.length;i++){
        //find minimum number to buy
        minSoFar = Math.min(minSoFar,prices[i]);
        //find when should sell so that profit will be max
        profit = Math.max(profit,prices[i]-minSoFar);
    }
    return profit;
}
console.log(maximumProfitOptimal([7, 10, 1, 3, 6, 9, 2]))