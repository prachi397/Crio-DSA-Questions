// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day 
// in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//brute force approach
function maxProfitbruteForce(profit){
    let maxProfit = 0;
    //iterate form 0 to n
    for(let i=0;i<profit.length;i++){
        //iterate from i to n
        for(let j=i+1;j<profit.length;j++){
            //get the maximum profti
            if(profit[j]>profit[i]){
                maxProfit = Math.max(maxProfit,profit[j]-profit[i]);
            }
        }
    }
    return maxProfit;
}
console.log(maxProfitbruteForce([7,1,5,3,6,4]));
//here tc is O(n*n) and sc is O(1)

//optimal approach
function maxProfitOptimal(profit){
    let minPrice = Number.POSITIVE_INFINITY;
    let maxProfit = 0;
    //iterate over the array
    for(let i=0;i<profit.length;i++){
        minPrice = Math.min(minPrice,profit[i]);
        maxProfit = Math.max(maxProfit,profit[i]-minPrice);
    }
    return maxProfit;
}
console.log(maxProfitOptimal([7,1,5,3,6,4]));
//here tc is O(n) and sc is O(1)

//one more optimal approach
function maxProfitOptimalNew(profit){
    //edge case: if we have less than 2 elements then how we can buy and cell
    if(profit.length < 2) return 0;
    let minPrice = profit[0]; //lets say minimum present at 0th index
    let maxProfit = 0;
    //iterate over the array
    for(let i=0;i<profit.length;i++){
        //if we find the smallest number then it will be min price to buy stock
        if(profit[i]<minPrice){
            minPrice = profit[i];
        }
        //if any point we found greater number than its the time to sell the stock
        else{
            maxProfit = Math.max(maxProfit,profit[i]-minPrice);
        }
    }
    return maxProfit;
}
console.log(maxProfitOptimalNew([7,1,5,3,6,4]));