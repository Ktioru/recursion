function mergeSort(array) {
    if (array.length <= 1) {
        return array;
      }
    
      // Split the array into two halves
      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);
    
      // Recursively sort each half
      const leftSorted = mergeSort(left);
      const rightSorted = mergeSort(right);
    
      // Merge the sorted halves
      return merge(leftSorted, rightSorted);
    
}

function merge(left, right) {
    let list = []
    let leftIndex = 0 
    let rightIndex = 0 
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          list.push(left[leftIndex]);
          leftIndex++;
        } else {
          list.push(right[rightIndex]);
          rightIndex++;
        }
      }
    return list.concat(left.splice(leftIndex), right.splice(rightIndex))
   
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);

