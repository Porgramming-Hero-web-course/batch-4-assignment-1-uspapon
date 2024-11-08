/**
 * -----------------------------------------------------------------------------
 * Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    => Sample Input:
    ------------------
    sumArray([1, 2, 3, 4, 5]);

    => Sample Output:
    ------------------
    => 15;
 * -----------------------------------------------------------------------------
*/

const sumArray = (numArr : number[]) : number => {
    const totalSum = numArr.reduce((accumulator, arrayElement) => accumulator + arrayElement, 0);  // when reduce function is called it iterates over an array and add each number of that array to an accumulator internally. We have set the initial value of the accumulator to 0 to get the accurate sum of the array. 
    return totalSum; 
}

// array declaration
const numberArray : number[] = [1, 2, 3, 4, 5];

const result = sumArray(numberArray);
console.log(result);