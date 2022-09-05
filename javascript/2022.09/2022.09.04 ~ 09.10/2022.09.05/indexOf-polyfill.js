let example = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let count = 0;

function custiomIndexOf(arr, value) {
  for( const elementIndex in arr) {
    count++
    if(arr[elementIndex] === value) {
      return elementIndex;
    }
    if(example.length === count) {
      return -1
    }
  }
}

console.log(custiomIndexOf(example, 8));