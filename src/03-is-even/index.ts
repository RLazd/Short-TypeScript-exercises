/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */
// beidzas ar 0,2,4,6,8
function isEven(n: number) {
    const arr = n.toString().split('.')[0].split('');
    let isEven: boolean = false;
    let lastDigit: string= arr.pop()!; // ! = non-null assertion operator
    const evenEndings = ['2', '4', '6', '8', '0']
    if (evenEndings.includes(lastDigit)) { 
        isEven = true
    }
    return isEven;
}
export { isEven };
