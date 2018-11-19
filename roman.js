/* Imports
fs-fileSystem import which supports read and write to files.
performance-this is to capture the timings in miliseconds.
* */

let fs = require('fs');
const {performance } = require('perf_hooks');

//IIFE to avoid global space pollution.
/*
 * this function reads the roman numbers from the roman.text file
 * it finds shorter version per roman number
 * calculates the difference of the length between the original file and newly generated file.
 *
 */

let romanMinimal=(function(){
    var t0 = performance.now();
    fs.readFile('roman.txt', (err, data) => {
        //if any error while reading the file error  is thrown.
        if (err) throw err;

        let pattern = /[IiDdCcLlXxVv]/g;
        if(data.toString().length>0 && pattern.test(data.toString())) {
            //there were total of 6 combinations which needed replacement.
            let val = data.toString().replace(/VIIII/g, "IX")
                .replace(/LXXXX/g, "XC")
                .replace(/DCCCC/g, "CM")
                .replace(/XXXX/g, "XL")
                .replace(/CCCC/g, "CD")
                .replace(/IIII/g, "IV")
            console.log("count after correcting the roman number : " + (data.toString().length - val.length));
        }
        else {
            console.error("file cannot be null");
        }
    })
    //calcuates the performance when it is done.
    let t1 = performance.now();
    console.log("time taken to execute the program ");
    console.log(t1-t0);
})();

romanMinimal;
