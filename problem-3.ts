/***
 * --------------------------------------------------------------------------------------
 * Create a TypeScript function called countWordOccurrences that accepts a sentence 
 * (string) and a word (string). The function should return the number of times the word 
 * appears in the sentence, ignoring case. Use the simple sentence without punctuation
 * as input.

  => Sample Input:
  ----------------
   countWordOccurrences("I love typescript", "typescript");
  => Sample Output:
  ------------------
   1;
    -------------------------------------------------------------------------------------
 */

    const countWordOccurrences = (sentence: string, givenWord: string): number  => {
      let count : number = 0;
      const sentenceInLowerCase = sentence.toLowerCase();
      const wordArray : string[] = sentenceInLowerCase.split(" ");
      console.log(wordArray);
      for(let word of wordArray){
         console.log({word, givenWord});
         if(word === givenWord){
            count++;
         }
         
      }

      return count;   

    }

   const numberOfOccurance =  countWordOccurrences("I love typescript", "typescript");
   console.log(numberOfOccurance);