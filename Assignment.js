//Que : Problem, take string input -> zzzzttteeeqqaao
// Sort first based on the frequency of characters in descending order, if freq is the same,
// then sort alphabetically in asc order.
// Expected output -> zzzzeeetttaaqqo


function SortString(str){
//Below loop is converting string into array with splitted words with diff char to perform operation of sorting 
  let strToArray = [];
  let startindex = 0
for (let i = startindex; i < str.length; i++) {   
if(str.charAt(i) !== str.charAt(i+1)){
    let slicer = (str.slice([startindex],[i+1]));
    strToArray.push(slicer)
    startindex = i+1
    }
}

// Now will sorting first as per frequency
strToArray.sort((a,b) => b.length - a.length)

// To sort based on alphabetically in asc order
// I implemented bubble sort with checking charCodeAt() for words with simmilar length.
for (let i = 0; i < strToArray.length; i++) {
    for (let j = i+1; j < strToArray.length; j++) {
   if (strToArray[i].length === strToArray[j].length){
    if (strToArray[i].charCodeAt(0) > strToArray[j].charCodeAt(0)) {
        let temp = strToArray[i];
        strToArray[i] = strToArray[j];
        strToArray[j] = temp;
    }
   }

   }
}

return strToArray.join('')
}

let testcase = "zzzzttteeeqqaao";
console.log(SortString(testcase));



