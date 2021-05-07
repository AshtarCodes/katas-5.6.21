//P: array of strings. R: filtered array of non-matches
// E: Ps: loop through, if array.includes is false, then push to new arr
function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filtered = []
    for (let bird of birds) {
      if (!geese.includes(bird)){
        filtered.push(bird)
      }
    }
    // return an array containing all of the strings in the input array except those that match strings in geese
    return filtered;
  };
  
  function superSize(num){
    return Number(String(num).split('').sort((a,b) => b - a).join(''));
  }

  //return only integers
function sum(){
    let sumArr = [...arguments]
    return sumArr.reduce((acc,c) => {
      if (Number.isInteger(c)){
        acc += c;
      }
      return acc;
    },0)
  }

  //Square every digit and concat
  function squareDigits(num){
    return Number(String(num).split('').map(n => n * n).join(''))    
  }

  function oddOrEven(array) {
    if (Array.isArray(array) && (array[0] === 0 || array[0] == null)) return 'even';
    return array.reduce((acc, n) => acc + n, 0) % 2 === 0 ? 'even' : 'odd';
  }

  function isSameLanguage(list) {
    return list.every(x => x.language === list[0].language)
};

  // To the Power of 
  //P: arr of pos nums, and a non-negative number N
  // R: number, E: N = 2, arr = [0,1,2,3] -> 2 * arr[2] returns 4. if N not in array, then returns -1
  function index(arr, n){
    return (arr[n]) ? Math.pow(arr[n], n) : -1;
  }
  
  // Removing elements
  function removeEveryOther(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (i % 2 === 0){
        newArr.push(arr[i])
      }
    }
    return newArr;
  }