/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    let arr: string[] =str.split('');
    let element: string = arr[0] ;
    let max: number = 0; 
    
    for (let i = 0; i < arr.length; i++) {
      const charCount = arr.filter(char => char===arr[i]).length 
      if (charCount > max) { 
          max = charCount;
          element = arr[i] 
       }
    }
    return element;
}

export { maxChar };
