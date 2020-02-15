
const nums = [10,5,3,8,2,6,4,7,9,1];

const swapIndex = (nums,i,j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums;
}

// Bubble sort(Less efficient)
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

// Insertion sort
const insertionSort = (nums) => {
  const newArray = [...nums]; 
  for(let i = 1; i < newArray.length; i++) {    //unorder part of the array
    for(let j = 0; j < i; j++) {  //Only first element is the order part of the array
      if(newArray[i] < newArray[j]) {
        const removedElement = newArray.splice(i,1); //take out 1 element from array at position i
        newArray.splice(j, 0, removedElement[0]); 
      } 
    }
  }
  return newArray;
}

console.log('Insertion Sort', insertionSort(nums));

