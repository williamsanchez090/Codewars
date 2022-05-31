// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

// NOTE: All input strings will contain only two words. Spoonerisms can
function spoonerize(str) {
    const words = str.split(' ');
   const letter1 = words[0][0];
   const letter2 = words[1][0];
   const ending1 = words[0].substring(1);
   const ending2 = words[1].substring(1);
   return letter2 + ending1 + ' ' + letter1 + ending2;
 };