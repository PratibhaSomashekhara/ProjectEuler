/* Imports
performance-this is to capture the timings in miliseconds.
* */

const {performance } = require('perf_hooks');

/*
 *
 * this program is used to calculate sum of  all the palindromes having sum of numbers consecutive squares
 * sum of the number should not exceed 100000000
 * the sum of the squares of the consecutive numbers is calculated and checked whether the number is palindrome.
 */

let palindromicSums=(function(){
    var t0 = performance.now();
    let sum=0;
    let arr=[];
    const value=100000000;
    for (let i = 1; i <= Math.sqrt(value); i++) {
           let num = i*i;
          for (let j = i + 1; j <= Math.sqrt(value); j++) {
                num += j * j;
                if (num> value)
                     break;
            if (checkPalindrome(num) && !arr.includes(num) ) {
                sum += num;
                arr.push(num);
            }
        }
    }

    function checkPalindrome(number){
        return number.toString() == number.toString().split('').reverse().join('');
    }
     console.log(sum);
    let t1 = performance.now();
    console.log("time taken to execute the program ");
    console.log(t1-t0);

})();

palindromicSums;