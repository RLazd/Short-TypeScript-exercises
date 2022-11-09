/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

 interface IWordCount {
  [key: string] : number;
}

class Words {
  wordCount: IWordCount = {};
  count(str: string) {
    this.wordCount = {};      
    const words: string[] = str.trim().toLowerCase().split(/\s/g);  
    
  words.forEach(word => {
      if(word) {
        if (this.wordCount.hasOwnProperty(word)) {
           this.wordCount[word] ++;
        } else {
           this.wordCount[word] = 1
        }
      } 
     });
     return this.wordCount
  }
}


export { Words };
