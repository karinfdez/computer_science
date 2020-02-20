
const nums = [10,5,3,8,2,6,4,7,9,1];

// ---------------- Custom functions   ----------------------- //

const swapIndex = (nums,i,j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums;
}

const stitch = (firstArray, secondArray) => {
  console.log('first', firstArray);
  console.log('secondArray', secondArray);
}

//  ------------------------- Algorithms --------------------- //

// Bubble sort(Less efficient, never useful)
const bubbleSort = nums => { 
  const newArray = [...nums]; 
  do {
    var swapped = false;
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i] > newArray[i+1]) {
        swapIndex(newArray, i, i+1);
        swapped = true;
      }
    }
  } while(swapped);
  return newArray;
};
console.log('Bubble sort', bubbleSort(nums));

// Insertion sort(Ocasionally useful)
const insertionSort = (nums) => {
  const newArray = [...nums]; 
  for(let i = 1; i < newArray.length; i++) {    //unorder part of the array
    for(let j = 0; j < i; j++) {                //Only first element is the order part of the array
      if(newArray[i] < newArray[j]) {
        const removedElement = newArray.splice(i,1); //take out 1 element from array at position i
        newArray.splice(j, 0, removedElement[0]); 
      } 
    }
  }
  return newArray;
}
console.log('Insertion Sort', insertionSort(nums));


// Merge sort(Most often used) divide and conquer algorithm
const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  } 
  const firstArray = nums.splice(0, 
    Math.floor(nums.length / 2)); 
    const secondArray = nums;
  return stitch(mergeSort(firstArray), mergeSort(secondArray));
}

mergeSort([1,2,3,4,5,6,7,8]);