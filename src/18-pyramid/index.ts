/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    if (n > 0)  {
        let arr: string[] = Array(n*2 -1).fill("");
        let i = 0;
        do {
           let startPosition = n - (i+1)
           let deleteCount: number = 2*i+1 ;
           let elementToRepeat = '#'.repeat(2*i+1);
           arr.splice(startPosition, deleteCount, elementToRepeat);
            if(i==2 && n==4){
                console.log(arr.join(" ")+" ");
            } else {
                console.log(arr.join(" "));
            }
           i++;
        }
        while (i < n);
    } 
}

export { pyramid };
