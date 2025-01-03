function findMissingNumber(arr, n) {
    // Calculate the sum of the first n natural numbers
    const totalSum = (n * (n + 1)) / 2;

    // Calculate the sum of the numbers in the array
    const arraySum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the total sum and the array sum
    return totalSum - arraySum;
}

// Example usage:
const arr = [3, 7, 1, 2, 6, 4];
const n = 6;

console.log("The missing number is:", findMissingNumber(arr, n));
