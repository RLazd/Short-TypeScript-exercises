/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */


function steps(n: number) {
    let arr: string[] = Array(n).fill("");
    let i = 0;
    do {
       let startPosition: number = 0;
       let deleteCount: number = i+1;
       let elementToRepeat: string = '#'.repeat(i+1);
       arr.splice(startPosition, deleteCount, elementToRepeat);
       console.log(arr.join(" "));
       i++;
   }
    while (i < n);
}

/*
function steps(n: number) {
    for(let i =0; i < n ; i ++) {
      let line = '';
      for (let j = 0; j<=i ; j++) {
        line+= '#'
      }
      for(let k = 
        
        0; k < n-i-1 ; k++) {
        line += ' ';
      }
      console.log(line);
    }
}
*/

export { steps };



