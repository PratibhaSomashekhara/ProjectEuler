const {performance } = require('perf_hooks');
/*
*  This Program calculates how many combinations within 100 numbers.
*  Dynamic Programming is used to calculate factorials of 1 to 100 and store in array.
*  in the for loop we calculate combinations for all c and r below 100;
*/

let moreThanMillion = (function(n){
    var t0 = performance.now();
    let morethanmillion = 0;
    //the size of the dp;
    let dp = [100];
    dp[0] = 1;

    //used for factorial calculations and storing in array
    for(let i=1;i<=100;i++){
        dp[i] = i * dp[i-1];
    }

    //combinations calculations.
    for(let j = n;j>=1;j--){
        for(let k=n-1;k>=1;k--){
            if (Combinatoric(j,k) >=1000000){
                morethanmillion++;
            }
        }
    }

    function Combinatoric(n,m){
        return (dp[n] / (dp[m] * dp[n-m]));
    }
    console.log(morethanmillion);
    let t1 = performance.now();
    console.log("time taken to execute the program ");
    console.log(t1-t0);
})(100);

moreThanMillion;





