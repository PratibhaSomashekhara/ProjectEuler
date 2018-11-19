### 3 Problems from ProjectEuler.net


#### Problem 1 - Roman Numerals

>For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the >rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a particular number.

>For example, it would appear that there are at least six ways of writing the number sixteen:

>IIIIIIIIIIIIIIII
>VIIIIIIIIIII
>VVIIIIII
>XIIIIII
>VVVI
>XVI

>However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, >as it uses the least number of numerals.

>The 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but >not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this problem.

>Find the number of characters saved by writing each of these in their minimal form.

>Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.

### Solution for Problem 1 

>The solution is present in the  **roman.js** file 

#### Steps to execute the program.
    1. Install Node JS in the local machine where you intend to run the program.
    2. there are 2 files needed to run this program which are roman.js and roman.txt.
    3. make sure both the files are in the same directory.
    4. Run the command "node roman.js" to execute the program.
    
#### A sample of the output
    ![alt text](https://github.com/PratibhaSomashekhara/ProjectEuler/blob/master/RomanNumber_89.png "Roman Numeric 89 ")
    
    
    
#### A description  of  the  process  followed  in  solving  the problem

   1. Read and revisited about Roman Numerals a bit.
   2. First I figured out all the combinations which can be shortened.
   3. Now I need to Replace all the combinations with the shorter forms which I figured out.
   4. Javascript gives a nice and clean way of replacing strings and I used that to achieve it.
   5. Did some validation for checking the length of string and checking if anythin apart from roman numberals are being             passed.
   
   
#### Problem 2 - Palindromic Sum  
>The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 62 + 72 + 82 + 92 + >102 + 112 + 122.

>There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these >palindromes is 4164. Note that 1 = 02 + 12 has not been included as this problem is concerned with the squares of positive >integers.

>Find the sum of all the numbers less than 108 that are both palindromic and can be written as the sum of consecutive squares.

### Solution for Problem 2 

>The solution is present in the  **PalindromicSums.js** file 

#### Steps to execute the program.
    1. Install Node JS in the local machine where you intend to run the program.
    2. Run the command "node PalindromicSums.js" to execute the program.
    3. The output shows the time taken to execute the program and the expected output.
    
#### A sample of the output
    ![alt text](https://github.com/PratibhaSomashekhara/ProjectEuler/blob/master/PalindromicSums_125.png "Palindromic Sum 125 ")
    
    
    
#### A description  of  the  process  followed  in  solving  the problem

   1. This Problem was to find all the numbers which are palindromes and have continuous squares of numbers which add upto it.
   2. The idea I figured out was to loop through all the squares of numbers having square roots smaller than 100000000.
   3. Now every time I add both the consecutive numbers I will check if the number is palindrome or not.
   4. If the number is palindrome then add it to a Sum variable or else keep trying till the end of the loop.
   5. Return the Sum of all such palindromic numbers.
     
   
#### Problem 3 Combinatoric Selections
>There are exactly ten ways of selecting three from five, 12345:

>123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

>In combinatorics, we use the notation, 5C3 = 10.

>In general,

>nCr =	
>n!
>r!(n−r)!
>,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.
>It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

>How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater than one-million?

### Solution for Problem 3 

>The solution is present in the  **CombinatoricSelections_53.js** file 

#### Steps to execute the program.
    1. Install Node JS in the local machine where you intend to run the program.
    2. Run the command "node CombinatoricSelections_53.js" to execute the program.
    3. The output shows the time taken to execute the program and the expected output.
    
#### A sample of the output
    ![alt text](https://github.com/PratibhaSomashekhara/ProjectEuler/blob/master/Combinatorics_53.png "Combinatorics 53 ")
    
    
    
#### A description  of  the  process  followed  in  solving  the problem

   1. This Problem needs to find all the combinations within 100 which are greater than 1000000.
   2. I figured out that we are repeating the same calculation for the same set of 100 numbers having factorials.
   3. I thought it is best to store the factorials of 1-100 in an array and use it for all the combinations instead of calling       facotrial each time.
   4. Best way to calculate 1-100 factorials is to use Dynamic Programming and I used that first.
   5. Then I wrote two for loops to go through combinations of C and R to calculate all the combinations and check if it is         greater than 1000000.
   6. If the number is 1000000 then increase the count of a variable.
   7. Return the variable.



###**NOTE**: The Problems 1 and 3 can be run in web browser too.
> You can open a new tab in one of the web browsers (Chrome).
> right click and open console.
> paste the code and call it.

###**Time Taken to solve the Problems**
*Took a total of 2.5 Hrs to solve the three problems.*
