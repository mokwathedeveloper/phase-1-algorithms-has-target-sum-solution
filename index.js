function hasTargetSum(array, target) {
  // Sort the array to make the solution more efficient
  array.sort((a, b) => a - b);

  // Use two pointers approach
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === target) {
      // Found a pair with the target sum
      return true;
    } else if (currentSum < target) {
      // Move the left pointer to increase the sum
      left++;
    } else {
      // Move the right pointer to decrease the sum
      right--;
    }
  }

  // No pair found
  return false;
}

/* 
  Big O Time Complexity: O(n log n) due to the array sorting operation.
*/

/* 
  Pseudocode:
  1. Sort the input array in ascending order.
  2. Initialize two pointers, `left` at the beginning of the array and `right` at the end.
  3. Use a while loop to iterate until `left` is less than `right`.
  4. Calculate the sum of elements at `left` and `right`.
  5. If the sum equals the target, return true.
  6. If the sum is less than the target, move the `left` pointer to the right.
  7. If the sum is greater than the target, move the `right` pointer to the left.
  8. If the loop completes without finding a pair, return false.

  Written Explanation:
  The function uses the two pointers approach on a sorted array. By comparing the sum of the elements at the left and right pointers with the target, the pointers are adjusted accordingly. This approach allows the function to efficiently find a pair with the target sum, if one exists.
*/

// Custom Tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
