/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

 function secondLargest(array: number[]) { //return array.sort((a,b) => (a -b)).slice(-2)[0]; 
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < array.length ; i++ ) {
          if (largest < array[i]) {
              largest = array[i];
          }
       for (let i = 0 ; i<array.length; i++) {
          if(array[i]>secondLargest && array[i] < largest) {
             secondLargest = array[i]
          }
       }
    }
    return secondLargest;
}

export { secondLargest };
