/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 * 
 */ 

 function reverse(int: number) {
    let arr: string[] = int.toString().split(''); 
    let cleanArr: string[] =  [];
    for (let i = arr.length -1; i >= 0; i--) {
        while (arr[i] == '0') {
            arr.pop();
            i--
        }
        cleanArr = arr;
    }

    if (cleanArr[0] === '-') {cleanArr.push(cleanArr.shift()!)} 
    
    let reversedArr: string[] = [];
    for (let i = cleanArr.length -1 ; i >= 0; i-- ) {      
        reversedArr.push(cleanArr[i]);
    }

    return Number(reversedArr.join(''));
}

export { reverse };
